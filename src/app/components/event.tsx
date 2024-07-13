"use client";

import { useState, useRef, useEffect } from "react";
import { useAccount, useEnsName } from "wagmi";

interface MetadataAttribute {
  trait_type: string;
  value: string;
}

interface Metadata {
  name: string;
  image: string;
  description: string;
  attributes: MetadataAttribute[];
}

const Mint = () => {
  const hasCreatedOrder = useRef(false);
  const { address } = useAccount();
  const [minting, setMinting] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [totalHolders, setTotalHolders] = useState(0);
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const { data: ensName } = useEnsName({ address });

  const handleMint = async () => {
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }

    setMinting(true);
    const recipientAddress = `base-sepolia:${address}`;

    try {
      const response = await fetch("./api/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          recipientAddress,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Metadata received:", result.metadata); // Log metadata received
        setMetadata(result.metadata); // Store metadata in state
        alert("NFT minted successfully!");
        setSignedUp(true);
      } else {
        const errorData = await response.json();
        console.error("Minting failed:", errorData);
        alert("Failed to mint NFT. See console for details.");
      }
    } catch (error) {
      console.error("Error during minting:", error);
      alert(
        "An error occurred while minting the NFT. See console for details."
      );
    }

    setMinting(false);
  };

  useEffect(() => {
    if (address) {
      console.log(`ENS Name for address ${address}: ${ensName || "None"}`);
    }
  }, [address, ensName]);

  useEffect(() => {
    const fetchTotalHolders = async () => {
      try {
        const response = await fetch(
          "https://base-sepolia.blockscout.com/api/v2/tokens/0x4d8Ebf1088efA6666A8bB082650B70ffD13F7a80/counters",
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );
        const result = await response.json();

        if (result && result.token_holders_count) {
          setTotalHolders(parseInt(result.token_holders_count));
        } else {
          console.error("Error: result is null or undefined", result);
          setTotalHolders(0); // Set to 0 if the result is not as expected
        }
      } catch (error) {
        console.error("Error fetching total holders:", error);
        setTotalHolders(0); // Set to 0 in case of an error
      }
    };

    fetchTotalHolders();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {address && ensName && (
        <div className="mt-4">
          <p>ENS: {ensName}</p>
        </div>
      )}
      <button
        onClick={handleMint}
        className={`bg-gradient-to-br from-[#01b15d] to-[#0296a8] hover:bg-gradient-to-br hover:from-[#00ff85] hover:to-[#00e1fc] text-white font-bold py-2 px-4 my-2 mt-4 rounded ${
          minting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={minting}
      >
        Event Sign Up
      </button>
      {signedUp && (
        <>
          <p className="mt-4">
            You can check the list of event attendees{" "}
            <a
              href="https://base-sepolia.blockscout.com/token/0x4d8Ebf1088efA6666A8bB082650B70ffD13F7a80?tab=holders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>
          </p>
          <div>
            <h3 className="mt-4">Total Event Attendees: {totalHolders}</h3>
          </div>
          {metadata && (
            <div className="mt-4 p-4 border rounded-lg bg-white text-black">
              <h3 className="text-xl font-bold">Event Details</h3>
              <p>
                <strong>Place:</strong>{" "}
                {
                  metadata.attributes.find(
                    (attr) => attr.trait_type === "Place"
                  )?.value
                }
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {
                  metadata.attributes.find((attr) => attr.trait_type === "Date")
                    ?.value
                }
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {
                  metadata.attributes.find((attr) => attr.trait_type === "Time")
                    ?.value
                }
              </p>
              <p>
                <strong>Activity:</strong>{" "}
                {
                  metadata.attributes.find(
                    (attr) => attr.trait_type === "Activity"
                  )?.value
                }
              </p>
            </div>
          )}
          <a
            href="https://warpcast.com/~/compose?text=I%20just%20signed%20up%20for%20a%20randomized%20activity%20with%20Proof%20of%20Friends!%20The%20event%20was%20minted%20as%20an%20NFT%20to%20my%20wallet.&embeds[]=URLHERE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-[#673AB3] text-white font-bold rounded"
          >
            Post on Warpcast
          </a>
        </>
      )}
    </div>
  );
};

export default Mint;

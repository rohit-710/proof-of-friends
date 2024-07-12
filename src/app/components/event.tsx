"use client";

import { useState, useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Mint = () => {
  const hasCreatedOrder = useRef(false);
  const { address } = useAccount();
  const [minting, setMinting] = useState(false);

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
        alert("NFT minted successfully!");
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

  return (
    <>
      <div className="flex justify-between items-center">
        <button
          onClick={handleMint}
          className={`bg-gradient-to-br from-[#01b15d] to-[#0296a8] hover:bg-gradient-to-br hover:from-[#00ff85] hover:to-[#00e1fc] text-white font-bold py-2 px-4 my-2 rounded ml-3 ${
            minting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={minting}
        >
          Event Sign Up
        </button>
      </div>
    </>
  );
};

export default Mint;

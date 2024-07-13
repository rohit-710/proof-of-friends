"use client";

import Event from "./components/event";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  sepolia,
  scrollSepolia,
  arbitrumSepolia,
  baseSepolia,
  celoAlfajores,
  polygonAmoy,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";

const config = getDefaultConfig({
  appName: "Proof of Friends",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "",
  chains: [
    mainnet,
    sepolia,
    scrollSepolia,
    arbitrumSepolia,
    baseSepolia,
    celoAlfajores,
    polygonAmoy,
  ],
  ssr: true,
});

const queryClient = new QueryClient();

const Page = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);

  const verifyProof = async (proof: any) => {
    // Simulate client-side verification logic
    try {
      // Simulate verification with a success response
      const response = await fetch("https://id.worldcoin.org/api/v1/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ proof }),
      });

      const data = await response.json();

      if (data.success) {
        setIsVerified(true);
        setVerificationFailed(false);
      } else {
        throw new Error("Verification failed");
      }
    } catch (error) {
      console.error("Verification failed", error);
      setIsVerified(false);
      setVerificationFailed(true);
    }
  };

  const onSuccess = () => {
    setIsVerified(true);
    setVerificationFailed(false);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <div className="container mx-auto max-w-3xl bg-white text-black rounded-lg my-5 relative">
            <div className="absolute top-4 right-4">
              <ConnectButton />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
              {isVerified ? (
                <Event />
              ) : (
                <>
                  <IDKitWidget
                    app_id="app_staging_50dec3a728d42d0b0f0adfdb3110a5c6"
                    action="test-action"
                    verification_level={VerificationLevel.Device}
                    handleVerify={verifyProof}
                    onSuccess={onSuccess}
                  >
                    {({ open }) => (
                      <button
                        onClick={open}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Verify with World ID
                      </button>
                    )}
                  </IDKitWidget>
                  {verificationFailed && (
                    <>
                      <p className="text-red-500 mt-4">
                        World ID Verification failed. Please try again.
                      </p>
                      <IDKitWidget
                        app_id="app_staging_50dec3a728d42d0b0f0adfdb3110a5c6"
                        action="test-action"
                        verification_level={VerificationLevel.Device}
                        handleVerify={verifyProof}
                        onSuccess={onSuccess}
                      >
                        {({ open }) => (
                          <button
                            onClick={open}
                            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                          >
                            Retry Verification
                          </button>
                        )}
                      </IDKitWidget>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Page;

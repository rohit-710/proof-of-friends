"use client";

import Event from "./components/event";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

import {
  CardStackIcon,
  KeyboardIcon,
  RocketIcon,
  TargetIcon,
} from "@radix-ui/react-icons";
import { Select } from "@radix-ui/themes";

const PageLayout = dynamic(() => import("./components/PageLayout"), {
  ssr: false,
});

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <h4 className="text-xl font-medium text-[#fff] mt-3">{title}</h4>
      <p className="font-medium text-[#787878] w-3/4">{description}</p>
    </div>
  );
};

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
import Link from "next/link"; // Assuming you're using Next.js
import dynamic from "next/dynamic";
import ContainerWrapper from "./components/ContainerWrapper";

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
          <ContainerWrapper>
            <div className=" mx-auto text-black rounded-lg relative">
              <nav className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-t-lg">
                <div>
                  <Link href="/" className="text-lg font-bold">
                    Proof of Friends
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                  <ConnectButton />
                </div>
              </nav>
              <div>
                <PageLayout title="IRL experiences for the chronically online!" />
                <div className="bg-[#272727] rounded-2xl p-6">
                  <div className="mx-auto max-w-6xl grid grid-cols-3 gap-5 pt-7 pb-8 place-items-center mb-10">
                    <FeatureCard
                      icon={
                        <CardStackIcon className="w-10 h-10 mb-2 text-white" />
                      }
                      title="Why Proof of Friends?"
                      description="Curated experiences for every interest"
                    />
                    <FeatureCard
                      icon={
                        <TargetIcon className="w-10 h-10 mb-2 text-white" />
                      }
                      title="New People"
                      description="Meet new people and expand your social circle"
                    />
                    <FeatureCard
                      icon={
                        <RocketIcon className="w-10 h-10 mb-2 text-white" />
                      }
                      title="Rewards for Interaction"
                      description="Earn rewards and collect NFTs"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-16 px-4 text-white bg-[#1a1a1a] rounded-b-lg">
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
          </ContainerWrapper>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Page;

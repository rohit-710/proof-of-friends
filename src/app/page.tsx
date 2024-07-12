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
  arbitrum,
  optimism,
  base,
  sepolia,
  scrollSepolia,
  arbitrumSepolia,
  baseSepolia,
  celoAlfajores,
  polygonAmoy,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

const config = getDefaultConfig({
  appName: "Proof of Friends",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || "",
  chains: [
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
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <div className="container mx-auto max-w-3xl bg-white text-black rounded-lg my-5 relative">
            <div className="absolute top-4 right-4">
              <ConnectButton />
            </div>
            <div className="flex items-center justify-center h-96">
              <Event />
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Page;

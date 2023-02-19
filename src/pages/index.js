import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";

import MangataXLogo from "../../public/mgx-logo.svg";

import TokenList from "@/components/token-list";

import { useState } from "react";

import { motion } from "framer-motion";

export default function Home() {
  const {
    data: tokens,
    error,
    isLoading,
  } = useSWR("/api/prices", async () => {
    const resp = await axios.get("/api/prices");
    return resp.data.prices;
  });

  // const isLoading = true;

  const [categories] = useState(["Tokens", "Pairs"]);

  return (
    <>
      <Head>
        <title>Tokens | Mangata X</title>
        <meta name="description" content="Token prices on Mangata X" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-12 py-20 bg-black min-h-screen antialiased font-mono">
        <Header />

        {isLoading ? (
          <div className="text-green-200 font-bold text-center md:text-xl">
            loading token price data...
          </div>
        ) : (
          <TokenList tokens={tokens} />
        )}
      </main>
    </>
  );
}

const Header = () => (
  <div className="mb-12">
    <div className="flex justify-center items-center">
      <div className="flex items-center space-x-1">
        <Image src={MangataXLogo} alt="MangataX Logo" />
      </div>
    </div>
    <div className="text-gray-100 text-lg mt-0.5 text-center leading-6">
      token prices on mangata
    </div>
    <div className="flex justify-center items-center">
      <a
        href="https://twitter.com/nightwing_yb"
        target={"_blank"}
        rel="noreferrer"
        className="text-gray-100 text-xs bg-slate-800 px-4 py-1 rounded-full mt-4 underline"
      >
        by nightwing
      </a>
    </div>
  </div>
);

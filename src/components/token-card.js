import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

function TokenCard({ token }) {
  return (
    <div className="flex w-full justify-between items-center my-4 rounded-md px-8 py-3 border-2 bg-zinc-900  border-cyan-100 border-opacity-40">
      <motion.div
        className="flex space-x-3 items-center w-2/3"
        initial={{ y: "10%", opacity: "0" }}
        animate={{ y: "0", opacity: "100%" }}
        transition={{ delay: "0.15" }}
      >
        <TokenImage symbol={token.symbol} />
        <div className="text-gray-200">{token.symbol}</div>
      </motion.div>
      <motion.div
        className="text-white font-bold"
        initial={{ y: "10%", opacity: "0" }}
        animate={{ y: "0", opacity: "100%" }}
        transition={{ delay: "0.15" }}
      >
        ${formatNumber(token.price)}
      </motion.div>
    </div>
  );
}

const TokenImage = ({ symbol }) => {
  return (
    <div className="rounded-full overflow-hidden ring-green-200 ring-[1.5px]">
      <Image
        src={`https://raw.githubusercontent.com/yield-bay/assets/main/list/${symbol}.png`}
        width={28}
        height={28}
        className={"rounded-full max-h-max"}
      />
    </div>
  );
};

function formatNumber(n) {
  if (n < 0.01) return n.toFixed(4);
  if (n < 0.1) return n.toFixed(3);

  return n.toFixed(2);
}

export default TokenCard;

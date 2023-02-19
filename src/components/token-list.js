import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TokenCard from "./token-card";

function TokenList({ tokens }) {
  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: "0", y: "10%" }}
      animate={{ opacity: "100%", y: "0" }}
      transition={{ duration: "0.2", type: "spring" }}
    >
      {tokens.map((t) => (
        <TokenCard token={t} key={t.name} />
      ))}
    </motion.div>
  );
}

export default TokenList;

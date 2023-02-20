import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

function TokenCard({ token }) {
  return (
    <>
      <Flex
        w={["324px", "324px", "725px"]}
        h={"71px"}
        bg={"rgba(100, 90, 133, 0.09)"}
        border={"1px solid #645A85"}
        fontFamily={"Poppins, sans-serif"}
        fontSize={["18px", "18px", "22px"]}
        rounded={"7px"}
        justify={"center"}
        align={"center"}
        color={"white"}
        marginBottom={"32px"}
      >
        <Flex w={["289px", "289px", "656px"]} justifyContent={"space-between"}>
          <Flex>
            <motion.div
              className="flex space-x-3 items-center w-2/3"
              initial={{ y: "10%", opacity: "0" }}
              animate={{ y: "0", opacity: "100%" }}
              transition={{ delay: "0.15" }}
            >
              <TokenImage symbol={token.symbol} />
              <div className="text-gray-200">{token.symbol}</div>
            </motion.div>
          </Flex>
          <Flex fontWeight={"semibold"}>
            <motion.div
              initial={{ y: "10%", opacity: "0" }}
              animate={{ y: "0", opacity: "100%" }}
              transition={{ delay: "0.15" }}
            >
              ${formatNumber(token.price)}
            </motion.div>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

const TokenImage = ({ symbol }) => {
  return (
    <Image
      src={`https://raw.githubusercontent.com/yield-bay/assets/main/list/${symbol}.png`}
      width={"28px"}
      height={"28px"}
      rounded={"full"}
      alt={symbol}
      border={"1.5px solid #645A85"}
    />
  );
};

function formatNumber(n) {
  if (n < 0.01) return n.toFixed(4);
  if (n < 0.1) return n.toFixed(3);

  return n.toFixed(2);
}

export default TokenCard;

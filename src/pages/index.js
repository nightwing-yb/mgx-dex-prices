import { Flex, Text, Image, Button, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

import { fetchTokenPrices } from "@/lib/token-price";
import TokenList from "@/components/token-list";

function Index() {
  const {
    data: tokens,
    error,
    isLoading,
  } = useSWR("/api/prices", async () => {
    const tokens = await fetchTokenPrices();
    console.log("tokens", tokens);
    return tokens;
  });

  return (
    <Flex
      minHeight={"100vh"}
      bg={"linear-gradient(180deg, #110D1D 0%, #050505 100%)"}
      flexDir={"column"}
      paddingBottom={"60px"}
    >
      <Flex
        w={"100%"}
        h={"261px"}
        fontFamily={"Syne, sans-serif"}
        flexDir={"column"}
        bgImage={"grids.svg"}
        bgSize={"contain"}
        align={"center"}
        color={"white"}
      >
        <Flex
          marginTop={"58px"}
          justifyContent={"space-between"}
          w={["347px", "347px", "1230px"]}
          align={"center"}
        >
          <Flex gap={"10px"}>
            <Text fontSize={["20px", "20px", "32px"]} fontWeight={"medium"}>
              Mangata
            </Text>
            <Image src={"logo.svg"} alt={"logo"} h={["27px", "27px", "44px"]} />
          </Flex>
          <Button
            w={"124px"}
            h={"35px"}
            border={"1px solid #645A85"}
            borderRadius={"7px"}
            bg={"rgba(100, 90, 133, 0.14)"}
            fontSize={"16px"}
            fontWeight={"normal"}
            _hover={{ background: "rgba(100, 90, 133, 0.3)" }}
            href="https://twitter.com/nightwing_yb"
            target="_blank"
            as={"a"}
          >
            by nightwing
          </Button>
        </Flex>
        <Flex>
          <Flex marginTop={"66px"} align={"center"}>
            <Text
              fontSize={["30px", "30px", "36px"]}
              w={["200px", "200px", "auto"]}
              textAlign={"center"}
              opacity={"80%"}
              fontWeight={"medium"}
            >
              token prices on mangata
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex marginTop={"16px"} align={"center"} flexDir={"column"} gap={"32px"}>
        {isLoading ? (
          <Spinner color={"white"} size={"lg"} />
        ) : (
          <TokenList tokens={tokens} />
        )}
      </Flex>
    </Flex>
  );
}

export default Index;

import { fetchTokenPrices } from "../../lib/token-price";
import Tokens from "../../lib/tokens.json";

const handler = async (req, res) => {
  const prices = await fetchTokenPrices();

  const tokens = Array.from(prices.keys()).map((symbol) => {
    const T = Tokens.find((t) => t.symbol.toLowerCase() === symbol);
    return {
      symbol: T.symbol,
      name: T.name,
      price: prices.get(symbol),
    };
  });

  await res.status(200).json({ prices: tokens });
};

export default handler;

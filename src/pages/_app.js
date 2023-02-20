import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/syne";
import "@fontsource/poppins";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <title>MGX Analytics</title>

        <link rel="shortcut icon" href="logo.svg" />

        <meta
          name="viewport"
          key="main"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="title"
          content="MGX Analytics"
        />
        <meta name="description" content="token prices on mangata" />

        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:url"
          content="https://mgx-analytics.xyz/"
          key="og-url"
        />
        <meta property="og:title" content="MGX Analytics" key="og-title" />
        <meta
          property="og:description"
          content="token prices on mangata"
          key="og-desc"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/bJy1wMk/mgx-analytics-og.png"
          key="og-image"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://aimint.fun/"
          key="twt-url"
        />
        <meta
          property="twitter:title"
          content="MGX Analytics
"
          key="twt-title"
        />
        <meta
          property="twitter:description"
          content="token prices on mangata"
          key="twt-desc"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/bJy1wMk/mgx-analytics-og.png"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </>
  );
}

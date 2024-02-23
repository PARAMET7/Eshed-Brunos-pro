import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout.js";
import {SessionProvider} from "next-auth/react";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};


export default function App({ Component, pageProps, session }) {
  const { data, isLoading, error } = useSWR(
    `https://eshed-brunos-pro.vercel.app/api/checkout`,
    //  { fallbackData: [] },
    fetcher
  );
//proPiecesInfo setProPiecesInfo
  // const [proPiecesInfo, setProPiecesInfo] = useImmerLocalStorageState(
  //   "id",
  //   { defaultValue: [] }
  // );
  const [shopingCart, setShopingCart] = useState([]);




  function handleToggleShopingCart(id) {
    const ProPiece = shopingCart.find((p) => p.id === id);
    if (ProPiece) {
      setShopingCart(
        shopingCart.map((productInfo) =>
          productInfo.id === id
            ? { id, isFavorite: !productInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setShopingCart([...shopingCart, { id, isFavorite: true }]);
    }
  }
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <Layout>
        <GlobalStyle />
          <SessionProvider session={session}>
            <Component {...pageProps}
            product={isLoading || error ? [] : data}
            // proPiecesInfo={proPiecesInfo}
            onToggleFavorite={handleToggleShopingCart}
            shopingCart={shopingCart}
             />
          </SessionProvider>
      </Layout>
    </SWRConfig>
  );
}

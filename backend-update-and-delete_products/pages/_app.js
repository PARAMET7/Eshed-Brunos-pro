import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/Layout/Layout.js";
import {SessionProvider} from "next-auth/react";
// import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";
import useSWR from "swr";
import { useState } from "react";
// import FavoriteButton from "@/components/Button/FavoriteButton.js";
// import CheckoutPage from "./checkout.js";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FavoriteProvider } from "./checkout1/favoredPro.js";

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
    const Product = shopingCart.find((p) => p.id === id);
    if (Product) {
      setShopingCart(
        shopingCart.map((productInfo) =>
          productInfo.id === id
            ? { id, isFavorite: !productInfo.isFavorite }
            : productInfo
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
          <FavoriteProvider>
            <Component {...pageProps}
            product={isLoading || error ? [] : data}
            shopingCart={shopingCart}
            onToggleFavorite={handleToggleShopingCart}

             />
          </FavoriteProvider>
          </SessionProvider>
      </Layout>
    </SWRConfig>
      // <Route path="/checkout" component={CheckoutPage} />
  );
}

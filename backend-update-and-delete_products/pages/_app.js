import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout.js";
import {SessionProvider} from "next-auth/react";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";
import useSWR from "swr";

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
    fetcher
  );
//proPiecesInfo setProPiecesInfo
  const [proPiecesInfo, setProPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(id) {
    const ProPiece = proPiecesInfo.find((p) => p.id === id);
    if (ProPiece) {
      setProPiecesInfo(
        proPiecesInfo.map((pieceInfo) =>
          pieceInfo.id === id
            ? { id, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setProPiecesInfo([...proPiecesInfo, { id, isFavorite: true }]);
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
            pieces={isLoading || error ? [] : data}
            proPiecesInfo={proPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
             />
          </SessionProvider>
      </Layout>
    </SWRConfig>
  );
}

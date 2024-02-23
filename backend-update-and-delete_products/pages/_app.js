import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout.js";
import {SessionProvider} from "next-auth/react";
// import 

export default function App({ Component, pageProps, session }) {
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
            <Component {...pageProps} />
          </SessionProvider>
      </Layout>
    </SWRConfig>
  );
}

//Layout.js

import TitleBar from "../TiltleBar/TitleBar";
import styled from "styled-components";
import Head from "next/head.js";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 5rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BRUNOS</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}

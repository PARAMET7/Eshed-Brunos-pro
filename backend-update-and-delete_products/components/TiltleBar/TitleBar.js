//TitleBar.js
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage/StyledImage";
import Link from "next/link.js";
// import { StyledLink } from "@/components/Link/Link.styled";
import React from "react";
//import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { StyledLink } from "../StyledLink/StyledLink";
import Card from "../Card/Card";

const StyledFrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  padding: 10px;
  opacity: 0.6;
  margin:0;
  width: 100%;
`

const FixedLink = styled(StyledLink)`
  background-color: black;
`;

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  margin: 0;
  padding: 10px;
  text-align: left;
  z-index: 100;
`;

const FixedLinkButton = styled(StyledLink)`
  z-index: 100;
  position: fixed;
  top: 50px;
  right: 50px;
  font-size: 50px;
  width: 70px;
  height: 70px;
  padding: 1px;
  text-align: center;
  margin: auto;
  border-radius: 500px;
  box-shadow: 2px 2px 15px 0.5px RGB(100, 100, 1000);
  background-color: pink;
`;

export default function TitleBar() {
  return (
    <Headline>
        <Link href="/" passHref legacyBehavior>
          <FixedLink>
            <StyledImage src="https://brunos.b-cdn.net/media/7e/d4/c6/1658234762/Brunos_Logo_weiss_transparent_2016.png?width=3000" alt="Description of the image" width={100} height={70}/>
          </FixedLink>
        </Link>
        <br/>
        <Link href={"./login"} ><button>Login</button></Link>
        {/* <Link href={"./checkout"}> */}
        <FixedLinkButton href={`/checkout`}> 🛒
          <button className="rounded-circle">
            <div className="rounded-circle bg-danger d-flex justify-content-centr align-items-center"
            style={{color: "magenta", width: "1rem", height:"1rem", position: "relative"}}
            >4</div>
          </button>
        </FixedLinkButton>
          {/* <button>lLogin</button> */}
        {/* </Link> */}
    </Headline>
  );
}

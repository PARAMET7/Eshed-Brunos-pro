//TitleBar.js
import styled from "styled-components";
import { StyledImage } from "@/components/StyledImage/StyledImage";
import Link from "next/link.js";
import { StyledLink } from "@/components/Link/Link.styled";


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
    </Headline>
  );
}

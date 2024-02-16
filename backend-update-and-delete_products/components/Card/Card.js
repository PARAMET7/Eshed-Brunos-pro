//Card.js
import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "../StyledImage/StyledImage";

const Article = styled.article`
  border-radius: 0.8rem;
  padding: 0.5rem;
  z-index: 1;
  background-color: rgba(213, 202, 235, 0.35);
`;
const Figure = styled.figure`
  ${'' /* position: relative; */}
  border-box: box-sizing;
  margin: 2px;
  border:1px;
  padding: 3px;
  border-radius: 0.8rem;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  `;

const ImageContainer = styled.div`
  ${'' /* position: relative; */}
  z-index: -1;
  border-radius: 0.8rem;

  height: 10rem;
  margin: 5px;
`;

const StyledCaptionContainer = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;

`


const StyledPlace = styled.p`
text-align: left;
margin: 5px;
padding:5px;
font-size:20px;
font-family: Comic Sans MS;
font-weight: 900;
color:white;
z-index: 5;
`;

const StyledLocation = styled.p`
text-align: right;
margin: 5px;
padding:5px;
font-size:15px;
font-family: Comic Sans MS;
font-weight: 900;
color:white;
z-index: 5;

`

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function Card({ name, image, location, id }) {
  return (
    <Article>
      <Figure>
        <ImageContainer>
          <StyledImage
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt=""
          />
        </ImageContainer>
        <StyledCaptionContainer>
          <StyledPlace>{name}</StyledPlace>
          <StyledLocation>📍 {location}</StyledLocation>
        </StyledCaptionContainer>
      </Figure>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}

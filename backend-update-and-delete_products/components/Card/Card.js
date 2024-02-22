//Card.js
import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "../StyledImage/StyledImage";
import Image from 'next/image';
import  FavoriteButton  from "../Button/FavoriteButton";


const Article = styled.article`
  margin-top: 20px;
  border-radius: 0.8rem;
  padding: 0.5rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
`;

const Figure = styled.figure`
  ${'' /* position: relative; */}
  border-box: box-sizing;
  margin: 2px;
  border:1px;
  padding: 3px;
  border-radius: 1rem;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  `;

const ImageContainer = styled.div`
  ${'' /* position: relative; */}
  z-index: -1;
  border-radius: 1rem;
  height: 20rem;
  margin: 5px;
`;

const StyledCaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledProduct = styled.p`
text-align: left;
margin: 5px;
padding:5px;
font-size:15px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 900;
color:black;
z-index: 5;
`;

// const StyledLocation = styled.p`
// text-align: right;
// margin: 5px;
// padding:5px;
// font-size:15px;
// font-family: Arial, Helvetica, sans-serif:
// font-weight: 900;
// color:black;
// z-index: 5;
// `

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

export default function Card({ name, price, currency, category, image, id , onToggleFavorite}) {
  console.log(Image);

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
        <FavoriteButton productId={id} onToggleFavorite={onToggleFavorite}/>

          <StyledFrameContainer>
            <StyledProduct>{name}</StyledProduct>
            <StyledProduct>{price}</StyledProduct>
            <StyledProduct>{currency}</StyledProduct>
            <StyledProduct>{category}</StyledProduct>
          </StyledFrameContainer>
        </StyledCaptionContainer>
      </Figure>
      <button>
        <Link href={`products/${id}`} passHref legacyBehavior>
          More Info
        </Link>
      </button>
    </Article>
  );
}


// {pieces?.map((piece) => (
//   div key={piece.slug}
//     <ArtPiecePreview
//       title={piece.name}
//       image={piece.imageSource}
//       artist={piece.artist}
//       name={piece.name}
//       slug={piece.slug}
//       isFavorite={
//         artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
//           ?.isFavorite
//       }

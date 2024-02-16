import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  top: 10;
  right: 0;
  padding: 10px;
  background: inherit;
  border: none;
  cursor: pointer;
`;

export default function FavoriteButton({isFavorite, onToggleFavorite}) {
  // const [isFavorite, setIsFavorite] = useState(false);

  // const onToggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save this art piece as favorite"
      onClick={onToggleFavorite}
      position={(10, 10)}
    >
        <Image
          src={ isFavorite ? "/assets/filledicon.svg" : "/assets/unfilledicon.svg"}
          alt="An outlined heart"
          width={24}
          height={24}
        />

    </StyledButton>
  );
}

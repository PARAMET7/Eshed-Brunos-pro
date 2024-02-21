// import { useState } from "react";
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

export default function FavoriteButton({isFavorite, productId}) {
  // const [isFavorite, setIsFavorite] = useState(false);

  const onToggleFavorite = () => {
  console.log("productId=>", productId);
  };

  return (
    <StyledButton
      className="favorite-button"
      aria-label="Save this art product as favorite"
      onClick={onToggleFavorite}
      position={(10, 10)}
    >
        <Image
          src={ isFavorite ? "/assets/heart.svg" : "/assets/unfilledicon.svg"}
          alt="An outlined heart"
          width={24}
          height={24}
        />

    </StyledButton>
  );
}

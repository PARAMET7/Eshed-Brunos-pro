
import { useState } from "react";
import CheckoutPage from "@/pages/checkout";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  top: 10px;
  right: 0;
  margin: 10px; // Adjust the margin for positioning
  padding: 10px;
  background: inherit;
  border: none;
  cursor: pointer;
`;
const Icon = styled.header`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 20px 0;
`



export default function FavoriteButton({isFavorite, productId}) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);
  const onToggleFavorite = async () => {
  console.log("productId=>", productId);
  //await CheckoutPage.create({ userId: '65d60d41c8aa85df5a737cce', productId: ['65cdf6e36b3b635beee1acd5']})
  setLocalIsFavorite((prevIsFavorite) => !prevIsFavorite);

   };
  return (
    <Icon>
      <StyledButton
      className="favorite-button"
      type="button"
      onClick={onToggleFavorite}
      position={(10, 10)}
      aria-label={isFavorite ? "unlike" : "like"}
      >
        <Image
          src={ localIsFavorite ? "/assets/heart.svg" : "/assets/unfilledicon.svg"}
          alt="An outlined heart"
          width={24}
          height={24}
          style={{ width: "24px", height: "24px" }} // Set size using style

        />

      </StyledButton>
    </Icon>
  );
}

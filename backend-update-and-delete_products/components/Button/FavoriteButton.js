
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

const icon = styled.header`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 20px 0;
`



export default function FavoriteButton({isFavorite, productId}) {
  // const [isFavorite, setIsFavorite] = useState(false);

  const onToggleFavorite = () => {
  console.log("productId=>", productId);

  };

  return (

      <StyledButton
      className="favorite-button"
      type="button"
      onClick={onToggleFavorite}
      position={(10, 10)}
      aria-label={isFavorite ? "unlike" : "like"}
      >
        <Image
          src={ isFavorite ? "/assets/heart.svg" : "/assets/unfilledicon.svg"}
          alt="An outlined heart"
          width={24}
          height={24}
          alt = {isFavorite ? "Liked" : "Not liked"}
        />

      </StyledButton>

  );
}

// import { Button } from "@mantine/core";
// export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
//   return (
//     <Button type="button" onClick={onToggleFavorite} color="rgb(15, 88, 85)">
//       {isFavorite ? "❤️ Remove from favorites" : "🤍 Add to favorites"}
//     </Button>
//   );
// }

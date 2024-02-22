
// import { useState } from "react";
// import Checkout from "@/db/models/Checkout";
import Image from "next/image";
import styled from "styled-components";
import Checkout from "@/pages/checkout/[id]";

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

  const onToggleFavorite = async () => {
  console.log("productId=>", productId);
  // await Checkout.create({ userId: '65d60d41c8aa85df5a737cce', products: ['65cdf6e36b3b635beee1acd5']})

  // //console.log("productId=>", productId);
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

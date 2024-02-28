// context/FavoriteContext.js
import { createContext, useContext, useState } from 'react';


const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoriteProductIds, setFavoriteProductIds] = useState([]);

  const toggleFavorite = (productId) => {
    setFavoriteProductIds((prevIds) =>
      prevIds.includes(productId)
        ? prevIds.filter((id) => id !== productId)
        : [...prevIds, productId]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favoriteProductIds, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function UseFavorite() {
  return useContext(FavoriteContext);
}


// import ProPieces from "@/components/Pro/ProPieces";
// import React from "react";

// export default function Favorites({ pieces, proPiecesInfo, onToggleFavorite }) {

//   const filteredFavorites = proPiecesInfo.filter((e) => e.isFavorite === true);
//   const filteredId = filteredFavorites.map((e) => e.id);
//   const filteredPieces = pieces.filter((e) => filteredId.includes(e.id));
//   console.log("fpi", filteredPieces);
//   return (
//     <ProPieces
//       pieces={filteredPieces}
//       onToggleFavorite={onToggleFavorite}
//       proPiecesInfo={proPiecesInfo}
//     />
//   );
// }

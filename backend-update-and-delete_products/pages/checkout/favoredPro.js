import ProPieces from "@/components/Pro/ProPieces";
import React from "react";

export default function Favorites({ pieces, proPiecesInfo, onToggleFavorite }) {

  const filteredFavorites = proPiecesInfo.filter((e) => e.isFavorite === true);
  const filteredId = filteredFavorites.map((e) => e.id);
  const filteredPieces = pieces.filter((e) => filteredId.includes(e.id));
  console.log("fpi", filteredPieces);
  return (
    <ProPieces
      pieces={filteredPieces}
      onToggleFavorite={onToggleFavorite}
      proPiecesInfo={proPiecesInfo}
    />
  );
}

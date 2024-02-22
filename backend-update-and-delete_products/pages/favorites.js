// import ArtPieces from "@/components/Art";

export default function favorite({pieces, isFavorite, onToggleFavorite, artPiecesInfo}) {
  const favoriteList = pieces.filter((artPiece) =>
    artPiecesInfo.find(
      (artpicesInfo) => artpicesInfo.slug === artPiece.slug && artpicesInfo.isFavorite
    )
  );
  return (
    <>
      <h1>Your Favourite Pieces</h1>
    {/* <ArtPieces
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      pieces={favoriteList}
      artPiecesInfo={artPiecesInfo}
      /> */}
    </>
  );
}

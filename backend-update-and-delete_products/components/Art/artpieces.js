// import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import { ArtPiecePreview, CardWithStats } from "./ArtPiecePreview";
import classes from "./ArtPiecePreview.module.css";



export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
// console.log(pieces);
console.log('artpieces=>',artPiecesInfo);
  return (
    <ul className={classes.ul}>
      {pieces?.map((piece) => {
        return (
          <div key={piece.slug} className={classes.div}>
            <ArtPiecePreview
              artist={piece.artist}
              title={piece.name}
              image={piece.imageSource}
              slug={piece.slug}
              isFavorite={
                artPiecesInfo?.find((artPieceInfo) => artPieceInfo.slug === piece.slug)?.isFavorite
              }
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        );
      })}
    </ul>
  );
}

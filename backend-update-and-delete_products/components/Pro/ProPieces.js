// import { ArtPiecePreview } from "@/components/ArtPiecePreview";
import { ProPiecesPreview } from "./ProPiecesPreview";
import classes from "./ArtPiecePreview.module.css";



export default function ProPieces({ product, productInfo, onToggleFavorite }) {
// console.log(product);
console.log('productInfo=>',productInfo);
  return (
    <ul className={classes.ul}>
      {product?.map((pro) => {
        return (
          <div key={pro.slug} className={classes.div}>
            <ProPiecesPreview
              id={pro.id}
              title={pro.name}
              image={pro.imageSource}
              isFavorite={
                productInfo?.find((productInfo) => productInfo.id === pro.id)?.isFavorite
              }
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        );
      })}
    </ul>
  );
}

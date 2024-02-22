import ProPieces from "@/components/Pro/ProPieces";


export default function favorite({pro, isFavorite, onToggleFavorite, PInfo}) {
  const favoriteList = pro.filter((p) =>
    PInfo.find(
      (pInfo) => pInfo.id === p.id && pInfo.isFavorite
    )
  );
  return (
    <>
      <h1>Your checkout list</h1>
    <ProPieces
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      pro={favoriteList}
      PInfo={PInfo}
      />
    </>
  );
}

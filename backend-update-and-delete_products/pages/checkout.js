// import ProPieces from "@/components/Pro/ProPieces";
// import Card from "@/components/Card/Card";
// import styled from "styled-components";
import useSWR from "swr";
import ProPieces from "@/components/Pro/ProPieces";
import styled from "styled-components";
// import Product from "@/db/models/Product";
import Link from "next/link";
// import { useRouter } from "next/router.js";
import { StyledImage } from "@/components/StyledImage/StyledImage";
import { StyledButton } from "@/components/Button/Button.styled";
import { useRouter } from "next/router";
import Form from "@/components/Form/Form";
import { useState } from "react";
import { UseFavorite } from "./checkout1/favoredPro";
import FavoriteButton from "@/components/Button/FavoriteButton";

// const ListItem = styled.li`
//   gap: 10rem;
//   padding: 15px;
//   position: relative;
//   align-items: center;
//   width: 400px;
// `;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  gap: 0.2rem;

  & > * {
    flex-grow: 1;
    text-align: center;
    max-width: 150px;
  }
`;

// const id = FavoriteButton.productId;
// console.log("=====",id);
// export default function CheckoutPage() {
//   const router = useRouter();
//   const { isReady } = router;
//   const { productId } = router.query;
//   console.log('productId=>', productId);

//   const { favoriteProductIds } = useFavorite();
//   const isProductInFavorites = favoriteProductIds.includes(productId);

export default function CheckoutPage() {

  // const [proId, setProId] = useState();
  const router = useRouter();
  const { isReady } = router;
  const { productId } = router.query;
  console.log("productId=>",productId);

  const { favoriteProductIds } = UseFavorite();
  const isProductInFavorites = favoriteProductIds.includes(productId);


  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(productId ? `/api/checkoput/${productId}` : null, fetcher);
  const isLoading = !data && !error;
  console.log("data=>",data);
  const loadingMessage = "Loading...";



  // async function addProduct(pro) {
  //   const response = await fetch(`/api/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(pro),
  //   });

  //   if (response.ok) {
  //     router.push("/");
  //   }
  // }

  // useEffect(() => {
  //   setSelectedProPiece(pro.find((p) => p.id === id));
  // }, [setSelectedProPiece, pro, id]);

  if (!isReady) return <h2>{loadingMessage}</h2>;
  if (isLoading) return <h2>{loadingMessage}</h2>;
  if (error) return <h2>Error...</h2>;
  const product = data.id;

  async function deleteProduct() {
    await fetch(`api/checkout/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  // console.log("favorites===>", favorites);

  return (
    <>
      <ImageContainer>
      {/* <FavoriteButton roductInfo={roductInfo} product={id} onToggleFavorite={onToggleFavorite}/> */}


          <StyledImage
            src={product.image}
            priority
            fill
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            alt=""
          />
        </ImageContainer>
        <h2>
          {product.name},
        </h2>
        <ButtonContainer>
        <Link href={`/checkout/${product.id}`} passHref legacyBehavior>
        </Link>
        <StyledButton onClick={deleteProduct} type="button" variant="delete">
          Delete Location
        </StyledButton>
      </ButtonContainer>
      <ProPieces
        id={pro.id}
        title={pro.name}
        image={pro.image}
        onToggleFavorite={onToggleFavorite}
      />
      <FavoriteButton
      id={id}
      onToggleFavorite={onToggleFavorite}

      />
      {/* <Comments
        locationName={place.name}
        comments={place.comments}
        id={id}
        mutate={mutate}
      /> */}
      <Form onSubmit={addProduct} formName={"add-product"} />
    </>
  );
}

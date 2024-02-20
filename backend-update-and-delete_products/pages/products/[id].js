
import { ProductCard } from "@/components/Product/Product.styled";
import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "@/components/Link/Link.styled";
import { StyledImage } from "@/components/StyledImage/StyledImage";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  margin: 10px;
`;

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("data==>",data);
  if (!data) {
    return;
  }
  return (


    <ProductCard>
      <ImageContainer>
        <StyledImage
          src={data.image_url}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
    <h2>{data.name}</h2>
    <h2>{data.price}</h2>
    <h2>{data.currency}</h2>
    <h2>{data.category}</h2>
    {/* <h2>{data.image_url}</h2> */}
    <p>Description: {data.description}</p>
    <p>
      Price: {data.price} {data.currency}
    </p>
    {/* {data.reviews.length > 0 && <Comments reviews={data.reviews} />} */}
    <StyledLink href="/">Back to all</StyledLink>
  </ProductCard>
  );
}

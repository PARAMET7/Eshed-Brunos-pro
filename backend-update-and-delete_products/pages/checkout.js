// import ProPieces from "@/components/Pro/ProPieces";
import Card from "@/components/Card/Card";
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

const ListItem = styled.li`
  gap: 10rem;
  padding: 15px;
  position: relative;
  align-items: center;
  width: 400px;
`;

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


export default function DetailsPage() {
  // const [selectedProPiece, setSelectedProPiece] = useState(null);
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: { product } = {},
    isLoading,
    error,

  } = useSWR(`api/checkout/${id}`);


  // useEffect(() => {
  //   setSelectedProPiece(pro.find((p) => p.id === id));
  // }, [setSelectedProPiece, pro, id]);

  if (!isReady) return <h2>Not ready...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  async function deleteProduct() {
    await fetch(`api/checkout/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  console.log("favorites===>", favorites);

  return (
    <>
      <ImageContainer>

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
        <Link href={`api/checkout/${product.id}`} passHref legacyBehavior>

        </Link>
        <StyledButton onClick={deleteProduct} type="button" variant="delete">
          Delete Location
        </StyledButton>
      </ButtonContainer>
      {/* <Comments
        locationName={place.name}
        comments={place.comments}
        id={id}
        mutate={mutate}
      /> */}
    </>
  );
}

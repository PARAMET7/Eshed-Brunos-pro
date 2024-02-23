import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "@/components/StyledLink/StyledLink.js";
import { StyledButton } from "@/components/Button/Button.styled.js";
import { StyledImage } from "@/components/StyledImage/StyledImage.js";

//import Comments from "../../../components/Comments.js";

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

const StyledLocationLink = styled(StyledLink)`
  text-align: center;
  background-color: var(--color-blue-light);
  border: 1px solid var(--color-blue-dark);
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: { pro } = {},
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/checkout/${id}`);

  if (!isReady) return <h2>Not ready...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  async function deletePro() {
    await fetch(`/api/checkout/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <>
      <ImageContainer>

        <StyledImage
          src={pro.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
      <h2>
        {pro.name}
      </h2>

      <p>{pro.description}</p>
      <ButtonContainer>
        <Link href={`/checkout/${pro._id}`} passHref legacyBehavior>
          <StyledLink>Edit Details</StyledLink>
        </Link>
        <StyledButton onClick={deletePro} type="button" variant="delete">
          Delete product
        </StyledButton>
      </ButtonContainer>
      {/* <Comments

        comments={pro.comments}
        id={id}
        mutate={mutate}
      /> */}
    </>
  );
}

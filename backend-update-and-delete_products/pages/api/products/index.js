import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "@/components/Link/Link.styled.js";
import { StyledButton } from "@/components/Button/Button.styled.js";
import { StyledImage } from "@/components/StyledImage/StyledImage.js";
// import Comments from "../../../components/Comments.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position: fixed;
  top: 18px;
  z-index: 101;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  margin: 10px;
`;

const StyledTitle = styled.h2`
  margin: 15px;
  text-align: center;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  & > * {
    flex-grow: 1;
    text-align: center;
    margin: 40px;
    margin-block: 10px;
  }
`;

const StyledLocationLink = styled(StyledLink)`
  text-align: left;
  background-color: #d9cf9c;
  color: black;
  font-size: 13px;
  width: 40%;
  padding: 10px;
  margin: 10px;
  justify-self: center;
`;

const StyledBorder = styled.div`
  border: black solid 1px;
  align-items: center;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: p, isLoading, error, mutate } = useSWR(`/api/products/${id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function handleDeletePlace() {
    if (window.confirm(`Do you really want to delete the beautiful destination "${p.name}"?`)) {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await response.json(router.push("/"));
      } else {
        console.error(response.status);
      }
    } else return;
  }

  async function addComment(commentData) {
    console.log("commentData on DetailsPage [id].index.js", commentData);
    const response = await fetch(`/api/products/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <Link href={"/"} passHref legacyBehavior>
        <StyledBackLink>⬅</StyledBackLink>
      </Link>
      <ImageContainer>
        <StyledImage
          src={p.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
      <StyledTitle>
        {p.name}
        <br />
        📍 {p.location}
      </StyledTitle>
      <Link href={p.mapURL} passHref legacyBehavior>
        <StyledLocationLink>📍open in Google Maps</StyledLocationLink>
      </Link>
      <p>{p.description}</p>
      <ButtonContainer>
        <Link href={`/products/${id}/edit`} passHref legacyBehavior>
          <StyledLink>Edit</StyledLink>
        </Link>
        <StyledButton
          onClick={handleDeletePlace}
          type="button"
          variant="delete"
        >
          Delete
        </StyledButton>
      </ButtonContainer>
      <StyledBorder />
      {/* <Comments
        locationName={p.name}
        comments={p.comments}
        onSubmit={addComment}
        placeIdForComment={id}
      /> */}
    </>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "../components/Form/Form.js";
import { StyledLink } from "../components/StyledLink/StyledLink.js";
import styled from "styled-components";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position: fixed;
  top: 18px;
  z-index: 101;
`;

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: placeData, isLoading, error } = useSWR(`/api/places/${id}`);
  console.log("edit.js  placeData: ", placeData);

  async function editPlace(updatedPlaceData) {
    const response = await fetch(`/api/places/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlaceData),
    });

    if (response.ok) {
      router.push(`/places/${id}`);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <Link href={`/places/${id}`} passHref legacyBehavior>
        <StyledBackLink justifySelf="start">⬅  cancel edit</StyledBackLink>
      </Link>
      <Form
        onSubmit={editPlace}
        formName={"edit-place"}
        defaultData={placeData}
      />
    </>
  );
}

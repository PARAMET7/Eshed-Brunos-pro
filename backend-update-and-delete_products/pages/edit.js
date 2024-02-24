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

export default function EditProduct() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: proData, isLoading, error } = useSWR(`/api/checkout/${id}`);
  console.log("edit.js  proData=>", proData);

  async function editProduct(updatedProductData) {
    const response = await fetch(`/api/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    });

    if (response.ok) {
      router.push(`/pro/${id}`);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-pro">Edit P</h2>
      <Link href={`/pro/${id}`} passHref legacyBehavior>
        <StyledBackLink justifySelf="start">⬅  cancel edit</StyledBackLink>
      </Link>
      <Form
        onSubmit={editProduct}
        formName={"edit-product"}
        defaultData={proData}
      />
    </>
  );
}

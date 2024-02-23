import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/Form/Form.js";
import { StyledLink } from "@/components/Link/Link.styled";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
  position:fixed;
  top:18px;
  z-index: 101;
`;

export default function CreateProductPage() {
  const router = useRouter();

  async function handleAddProduct(productsData) {
    console.log("productsData=>", productsData);
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsData),
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      {/* <Link href="/" passHref legacyBehavior>
        <StyledBackLink>⬅Back</StyledBackLink>
      </Link> */}
      <h2 id="add-product">Search Product</h2>
      <Form onSubmit={handleAddProduct} formName={"add-product"} />
    </>
  );
}

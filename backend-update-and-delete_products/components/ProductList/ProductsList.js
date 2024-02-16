//ProductsList.js
import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");
  console.log("data=>",data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Items</StyledHeading>
      <StyledList>
        {data.map((products) => (
          <li key={products._id}>
            <StyledLink href={`/${products._id}`}>{products.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}

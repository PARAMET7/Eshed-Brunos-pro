// import ProductList from "@/components/ProductList/ProductsList";
// import ProductForm from "../components/ProductForm";
// import { StyledImage } from "@/components/StyledImage/StyledImage";
// import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import Card from "@/components/Card/Card";
import { StyledLink } from "@/components/Link/Link.styled";
import ProPieces from "@/components/Pro/ProPieces";


const List = styled.ul`
  list-style: none;
  display: flex;
  /* flex-direction: row-reverse; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-left: 0;
  margin: 15px;
`;

const ListItem = styled.li`
  gap: 10rem;
  padding: 15px;
  position: relative;
  align-items: center;
  width: 400px;
`;

const Heading = styled.h1`
  text-align: center;
  color: black;
`;

const FixedLink = styled(StyledLink)`
  z-index: 100;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 50px;
  width: 70px;
  height: 70px;
  padding: 1px;
  text-align: center;
  margin: auto;
  border-radius: 500px;
  box-shadow: 2px 2px 15px 0.5px RGB(177, 156, 217);
`;

export default function HomePage({ product, roductInfo, onToggleFavorite }) {
  console.log('========>',onToggleFavorite);
  const { data } = useSWR("/api/products", { fallbackData: [] });
  return (
    <>
      <br/>
      <List role="list">
        <ProPieces roductInfo={roductInfo} product={product} onToggleFavorite={onToggleFavorite}/>

        {data.map((p) => {
          return (
            <ListItem key={p.id}>
              <Card
                name={p.name}
                price={p.price}
                currency={p.currency}
                category={p.category}
                image={p.image_url}
                id={`${p._id.$oid ?? p._id}`}
              />
            </ListItem>
          );
        })}
      </List>
      {/* <ProductList /> */}
      <Heading>
        <span role="img" aria-label="A Product">
        </span>
        BERLIN
      </Heading>

      <hr />

      {/* <ProductForm /> */}
      {/* <Link href="/create" passHref legacyBehavior> */}
        <FixedLink href='/find' > 🔎 </FixedLink>
      {/* </Link> */}
    </>
  );
}

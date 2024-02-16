import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import { StyledImage } from "@/components/StyledImage/StyledImage";
import useSWR from "swr";
import  Headline  from "../components/TiltleBar";
import Card from "@/components/Card/Card";
import { StyledLink } from "@/components/Link/Link.styled";
import Link from "next/link.js";


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
  position: relative;
  align-items: center;
  width: 400px;
`;

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

const FixedLink = styled(StyledLink)`
  z-index: 100;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 50px;
  width: 60px;
  height: 60px;
  padding: 1px;
  text-align: center;
  margin: auto;

  border-radius: 500px;
  box-shadow: 2px 2px 15px 0.5px RGB(177, 156, 217);
`;

export default function HomePage() {
  const { data } = useSWR("/api/products", { fallbackData: [] });
  return (
    <>
      <div>
        {/* <Headline> */}
          <StyledImage src="https://brunos.b-cdn.net/media/7e/d4/c6/1658234762/Brunos_Logo_weiss_transparent_2016.png?width=3000" alt="Description of the image" width={600} height={150}/>
        {/* </Headline> */}
      </div>
      <List role="list">
        {data.map((p) => {
          return (
            <ListItem key={p.id}>
              <Card
                name={p.name}
                image={p.image}
                id={`${p._id.$oid ?? p._id}`}
              />
            </ListItem>
          );
        })}
      </List>
      <Heading>
        <span role="img" aria-label="A fish">

        </span>
        BERLIN
      </Heading>
      <ProductForm />
      <hr />
      <ProductList />
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+</FixedLink>
      </Link>
    </>
  );
}

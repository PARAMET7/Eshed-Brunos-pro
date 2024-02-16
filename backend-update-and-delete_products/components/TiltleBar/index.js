import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  margin: 0;
  padding: 30px;
  text-align: center;
  z-index: 100;
`;

export default function TitleBar() {
  return <Headline></Headline>;
}

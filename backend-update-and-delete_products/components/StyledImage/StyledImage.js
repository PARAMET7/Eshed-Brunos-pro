//StyledImage.js
import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  background-color: black;
  /* object-fit: cover; */
  border-radius: 0.2rem;
  /* box-shadow: 1px 1px 7px 0.5px RGB(177, 156, 217); */
  height: 70px;
  width: 270px;
`;

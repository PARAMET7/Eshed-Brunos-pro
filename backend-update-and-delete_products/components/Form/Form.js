import styled from "styled-components";
import StyledButton from "../Button/Button.styled";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 15px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const placeData = Object.fromEntries(formData);
    onSubmit(placeData);
    console.log("placeData", placeData);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="id"
        name="name"
        type="text"
        defaultValue={defaultData?.id}
      />
      {/* <Label htmlFor="image-url"> Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      /> */}
      {/* <Label htmlFor="location">Product</Label>
      <Input
        id="Product"
        name="Product"
        type="text"
        defaultValue={defaultData?.Product}
      /> */}

      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "Update product" : "Check product"}
      </StyledButton>
    </FormContainer>
  );
}

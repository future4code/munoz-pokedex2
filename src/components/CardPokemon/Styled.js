import styled from "styled-components";

export const CardContainerMain = styled.div`
  height: 35vh;
  width: 300px;
  margin: 40px;
  display: grid;
  grid-template-rows: 85% 15%;

  button {
    background-color: black;
    color: white;
    border: 1px solid gray;
  }
`;

export const ImageContainer = styled.div`
  background: black;
  opacity: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ImagePokemon = styled.img`
  height: 20vh;
`;

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

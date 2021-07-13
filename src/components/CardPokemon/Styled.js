import styled from "styled-components";

export const CardContainerMain = styled.div`
  height: 40vh;
  width: 300px;
  margin: 40px;
  display: grid;
  grid-template-rows: 85% 15%;
`;

export const ImageContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagePokemon = styled.img`
  width: 70%;
`;

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

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
    /* border: 1px solid red; */
    border-top: 2px solid rgb(239, 191, 1);
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(239, 191, 1);
    color: black;
  }

  button:active {
    background-color: rgb(182, 146, 1);
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
  width: 70%;
`;

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

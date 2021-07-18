import styled from "styled-components";

export const DetailPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPokemonDetails = styled.section`
  height: fit-content;
  width: 90vw;
  display:grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns:  25vw 1fr 25vw;
  padding: 16px;
  justify-self: center;
  align-self: center;
  text-decoration: underline;
  margin-top: 30px;
  border-radius: 30px;
  background-color: rgb(25, 25, 25);
  color: lightgray;
  h1{
      grid-column: 1/3;
      color:white;
      text-decoration: underline;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
    border-radius: 25px;
    border: 1px solid lightgray;
    padding: 16px;
    margin: 8px;
    align-items: space-between;
  }
  aside{
    grid-column: 1;
  }
  strong{
    color:white;
  }  
  h3{
    color: white;
    align-self: center;
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    display: inline-block;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.6rem;
    }
    div {
      min-height: 40vh;
      border-radius: 15px;
      padding-left: 10px;
      margin-left: 28px;
    }
  }
`

export const PokemonImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 25vh;
    width: 25vw;
  }
  @media (max-width: 800px) {
    img {
      height: 30vh;
      width: 30vw;
    }
  }
  @media (max-width: 500px) {
    flex-direction: row;
    img {
      height: 25vw;
      width: 25vw;
    }
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 55vh;
  margin-top: 36px;
  ::-webkit-scrollbar {
      width: 12px;
  }
  ::-webkit-scrollbar-track {
      background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 3px solid lightgray;
  }
  button {
    background-color: black;
    color: white;
    border: 2px solid rgb(239, 191, 1);
    border-radius: 20px;
    cursor: pointer;
    margin-top: 8px;
  }

  button:hover {
    background-color: rgb(239, 191, 1);
    color: black;
  }

  button:active {
    background-color: rgb(182, 146, 1);
  }

`
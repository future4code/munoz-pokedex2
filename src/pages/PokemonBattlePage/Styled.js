import styled from "styled-components";

export const DetailPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPokemonDetails = styled.section`
    height: 80vh;
    width: 90vw;
    display:grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows: 10vh 1fr;
    padding: 16px;
    justify-self: center;
    align-self: center;
    text-decoration: underline;
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
      padding-right: 2px;
      margin-left: 28px;
    }
  }
`;

export const PokemonImages = styled.section`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 30vh;
    width: 30vw;
  }
  @media (max-width: 800px) {
    img {
      height: 20vh;
      width: 20vw;
    }
  }
  @media (max-width: 500px) {
    img {
      height: 10vh;
      width: 10vw;
    }
  }
`;

export const Details = styled.section`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 55vh;
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

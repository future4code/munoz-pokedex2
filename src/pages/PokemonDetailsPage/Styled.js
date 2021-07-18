import styled from 'styled-components'

export const DetailPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledPokemonDetails = styled.section`
    height: 80vh;
    width: 70vw;
    display:grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows: 10vh 1fr;
    padding: 16px;
    justify-self: center;
    align-self: center;

    text-decoration: underline;
  }

  @media (max-width: 800px) {
    display: inline-block;
    margin: 0 auto;
    height: 138vh;

    h1 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
    div {
    min-height: 40vh;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 2px;
    margin-left: 28px;
  }
  }

  @media (max-width: 500px) {
    display: inline-block;
    margin: 0 auto;
    height: 138vh;

    h1 {
      font-size: 1rem;
    }
  }
`

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
      height: 13vh;
      width: 20vw;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 25vw; 
    }
`

export const Details = styled.section`
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
  @media (max-width: 800px) { 
    width: 50vw;
    letter-spacing: 0.1rem;
    height: 40vh;
   
  }
`

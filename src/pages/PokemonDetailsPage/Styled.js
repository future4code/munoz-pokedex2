import styled from 'styled-components'


export const StyledPokemonDetails = styled.section`
    height: 80vh;
    width: 70vw;
    display:grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows: 10vh 1fr;

    h1{
        grid-column: 1/3;
    }

    aside{
        grid-column: 1;
    }
   img{
       height: 25vh;
   }
   section{
       overflow-y: scroll;
   }
`

export const PokemonImages = styled.div`
grid-column: 1;
grid-row: 2;
display: flex;
flex-direction: column;
align-items: space-evenly;
`
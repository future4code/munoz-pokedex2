import styled from 'styled-components'

export const StyledPokemonDetails = styled.section`
    height: 80vh;
    width: 70vw;
    display:grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows: 10vh 1fr;
    padding: 16px;
    justify-self: center;
    align-self: center;
    margin-top: 30px;
    h1{
        grid-column: 1/3;
    }

    aside{
        grid-column: 1;
    }
    section{
       overflow-y: scroll;
    }
    :first-child, :nth-child(2){
        background-color: black;
        color: white;
    }
`

export const PokemonImages = styled.div`
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    img{
        height: 25vh;
        width: 25vh;
    }
`
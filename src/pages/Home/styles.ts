import styled from "styled-components";

import bannher_mobile from "../../assets/bannher_mobile.svg"

export const MainContainer = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 4rem;

    @media (max-width: 667px) {
        margin-top: 0.5rem;
    }
   
`

export const MainBanner = styled.div`
 
  
    height: auto;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 667px) {
        background-image: url(${bannher_mobile});
    }


`


export const MainSlogan = styled.section`
    height: 8vh;
    background: linear-gradient(90deg, #C72940 37.86%, #2C2D49 138.85%);
    color: ${(props)=>props.theme['gray-100']};
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Roboto';
    
    @media (max-width: 667px) {
        height: 5vh;
        font-size: 1.5rem;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const MainCard = styled.section`
    width: 100%;
    padding: 1rem;


    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;


    @media (max-width: 667px) {
        display: flex;
        flex-direction: column;
    }

`
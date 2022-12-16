import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 4rem;
`

export const MainBanner = styled.div`
 

    height: auto;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`


export const MainSlogan = styled.section`
    height: 8vh;
    background-color: ${(props)=>props.theme['red-700']};
    color: ${(props)=>props.theme['gray-100']};
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Roboto';
    

`

export const MainCard = styled.section`
    width: 100%;
    padding: 1rem;


    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

`
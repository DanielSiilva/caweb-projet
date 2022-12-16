import styled from "styled-components";


export const HeaderContainer = styled.header `
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 10vh;
    padding: 0.5rem 7rem;
    border-bottom: 3px solid ${(props)=> props.theme['gray-900']};

    background:${(props)=>props.theme['gray-100']};
    

    img{
        width: 5rem;
    }

    nav{
        display: flex;
        gap: 2rem;

        a{
            color: ${(props)=> props.theme['gray-900']};
            text-decoration:none;
        }
    }

`
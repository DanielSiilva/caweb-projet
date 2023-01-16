import styled from "styled-components";


export const HeaderContainer = styled.header `
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 10vh;
    padding: 0.5rem 11.5em;


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








    @media (max-width: 667px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        height: auto;
        border-bottom: none;
        position: initial;

        img{
            display: none;
        }

        nav{
           display:flex;
           flex-direction: column;
           gap: 0.5rem;
            
           width: 90%;
           padding: 1rem 1rem;
         
            a{
                font-weight:700;
                color: ${(props)=> props.theme['gray-100']};
                text-decoration:none;
                text-align: center;
                padding: 0.7rem;
                

                background: linear-gradient(90deg, #C72940 50%, #2C2D49 142.66%);
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
                border-radius: 8px;

            }
          
        }
    }

`
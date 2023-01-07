import styled from "styled-components";


import background from '../../assets/background.svg'
import background_mobile from '../../assets/background_mobile.svg'

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;

    background: url(${background});
    background-size: 100%; 
    background-repeat: no-repeat;

    width: 100%;
    height: 100%;

 

    @media (max-width: 667px) {
        background: url(${background_mobile});
        background-repeat: no-repeat;
        
        width: 100%;
        height: 100%;


    }
 
`



export const FooterDescription = styled.section`
    height:50vh;
    width: 100%;
    padding: 0rem 2rem;

    display: flex;

    align-items: center;
  
    gap: 2rem;

    margin-top: 5rem;




    @media (max-width: 667px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: auto;
        padding: 0.4rem;
        gap: 0.5rem;

        margin-top: 2.5rem;
    }
    
`

export const LogoContainer = styled.div`
    border-right: 1px solid white ;
    height: 80%;


    display: flex;
    justify-content: center;

    img{
        width: 20rem;
        margin-right: 2rem;
    }

    @media (max-width: 667px) {
        width: 1rem;

        border-right: none ;
        height: 100%;
    }

`






export const SocialNetworks = styled.section`



    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    border-right: 1px solid white ;
    height: 80%;
    margin-right: 2rem;
    padding: 1rem;

    p{
        font-family: 'Roboto';
        font-style: normal;
        white-space: nowrap;
        font-weight: 600;
        font-size: 30px;
        line-height: 47px;
        color:  ${(props)=> props.theme['gray-100']};
    }

    div{
        display: flex;
        gap: 2rem;

        img{
            width: 4rem;
        }

    }

    @media (max-width: 667px) {
        display: flex;
        justify-content: center;
        align-items: center;


        border-right: none ;
        height: 100%;
        width: 90%;
        margin-right: 0rem;
        
        padding: 0.5rem;
        border-bottom: 1px solid ${(props)=> props.theme['gray-100']};
        
        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            display: flex;
            align-items: center;
            letter-spacing: 0.09em;
            white-space: nowrap;
           
        }

        div{
            margin-bottom: 2rem;
            img{

                width: 3rem;
            }
        }
    
    }

    

`



export const Contacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    
    font-family: 'Roboto';
    font-style: normal;
    color:  ${(props)=> props.theme['gray-100']};


    p{
        font-size: 3rem;
    }

    span{
        font-size: 2rem;
    }



    @media (max-width: 667px) {
        p{
            font-size: 2rem;
        }

        span{
            font-size: 1rem;
        }

    }

`







export const FooterRights = styled.section`
    background:${(props)=> props.theme['gray-900']};
    color:${(props)=> props.theme['gray-100']};
    padding: 0.5rem;
    text-align: center;
    font-size:0.8rem;
    width: 100%;
    span{
        color: ${(props)=>props.theme['yellow-700']};
    }


`









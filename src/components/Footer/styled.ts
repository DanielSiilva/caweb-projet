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
    height: 50vh;
    

   

   

    @media (max-width: 667px) {
        background: url(${background_mobile});
        background-repeat: no-repeat;
        background-size: 100%; 
        background-size: cover; 
        
        width: 100%;
        height: 100%;

    }
 
`

export const FooterItems = styled.section`
 

    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 6rem;

    padding: 2rem;
    width: 100%;
    height: 80%;

    @media (max-width: 667px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        margin-top: 4rem;
        gap:2rem;
    }

`
export const Logo = styled.div`
    img{
        width: 10rem;
    }
`
export const SocialNetworks = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.4rem;

    width: 20%;
    height: 20%;
    
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.063rem;
        display: flex;
        align-items: center;
        color: ${props => props.theme['yellow-700']};
    }

    section{
        display: flex;
        align-items: center;
        gap: 2rem;
        img{

            width: 2rem;
        }
    }


    @media (max-width: 667px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 0.5rem;
        white-space: nowrap;
        gap: 1rem;
        
        width: 90%;
        
        span{
            font-size:1.2rem;
            text-decoration: underline;
        }

        section{
            gap: 1rem;
        }
    }
`

export const Help = styled(SocialNetworks)`


    
    section{
        display: flex;
        gap:0.2rem;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;

        span{
            font-size: 1rem;
        }

        p{
            font-family: "Roboto";
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.2rem;
            letter-spacing: 0.09em;
            text-align: center;
            color: ${props => props.theme['gray-100']};
        }
    }


    @media (max-width: 667px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1rem;
        white-space: nowrap;
        gap: 1rem;
        
        width: 90%;
        
        span{
            font-size:1.6rem;
        }

        section{
            gap: 0.2rem;


            p{
                text-align: center;
                white-space: nowrap;
                font-size:1rem;
                width: 100%;
            }
        }
    }

`

export const Branches = styled(SocialNetworks)`


    section{
        display: flex;
        gap:0.2rem;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;

        span{
            font-size: 1rem;
        }

        p{
            font-family: "Roboto";
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.2rem;
            letter-spacing: 0.09em;
            white-space: nowrap;
            color: ${props => props.theme['gray-100']};
        }
    }

    @media (max-width: 667px) {
      display: none;

    }


`




export const DownloadApp = styled(SocialNetworks)`
    
    display: flex;
    gap: 0px;
    


    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: flex-start;
        gap:0rem;

      

        img{

            min-width: 5.5rem;
        }
    }

`




export const Footerr = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    text-align: center;
    color: ${props=> props.theme['gray-100']};
    background-color: rgba(44, 45, 73, 1);

    p{
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.188rem;
        letter-spacing: 0.09em;
        text-align: left;
        white-space: nowrap;
        width: 100%;
        text-align: center;

        span{
            color: ${props=> props.theme['yellow-700']};
        }
    }

    @media (max-width: 667px) {
        p{
           
            font-size: 0.5rem;
            text-decoration:underline;
        }

    }

`
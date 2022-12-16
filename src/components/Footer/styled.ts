import styled from "styled-components";

export const FooterContainer = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: center;
   
    
   height: 40vh;
   width: 100%;
    
`

export const FooterLogo = styled.div`


    padding: 1rem;
    border-right: 2px solid ${(props)=>props.theme['gray-100']};
    img{
        width: 12rem;
    }

`

export const FooterDescription = styled.section`
    background:${(props)=> props.theme['red-700']};
    height:50vw;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap:3rem;
    padding:1rem;

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


export const FooterSocialNetworks = styled.section`
    display:flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: ${(props)=> props.theme['gray-100']};
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid ${(props)=>props.theme['gray-100']};

   div{
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
            width: 4rem;
        }
   }

`

export const FooterContacts = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap:0.5rem;

    font-size: 1.4rem;
    color: ${(props)=>props.theme['gray-100']};
    
`
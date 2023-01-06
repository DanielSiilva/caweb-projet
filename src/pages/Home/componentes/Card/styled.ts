import styled, {css} from "styled-components";


export const CardContainer = styled.div`
    
    width: 23vw;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;


    @media (max-width: 667px) {
        width: 100%;

        &hover{
            -webkit-transform: none;
             transform: none;
        }

    }

    &:hover{
        cursor: pointer;
        -webkit-transform: scale(1);
        transform: scale(1.04);
    }


    
`

export const CardMain = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    
`
interface HeaderCardProps {
    variant?: string
}

export const CardHeader = styled.header<HeaderCardProps>`
    padding: 0.5rem;
    background: linear-gradient(90deg, #C72940 37.86%, #2C2D49 138.85%);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 4rem;
        font-weight:bold;
        color: ${(props)=>props.theme['gray-100']};
    }

    span{
        font-size: 2rem;
        color: ${(props)=>props.theme['yellow-700']};

    }

    ${(props) =>
        props.variant === 'black' &&
    css`
      background: linear-gradient(90deg, #2C2D49 26.68%, #C72940 159.26%);

      span{
        font-weight: bold;
      }
    `}

`




export const CardInformation = styled.div<HeaderCardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 2rem;
        text-align: center;
        font-weight:700;
        color: ${(props)=> props.theme['gray-900']};
    }

    p:nth-child(3){
        font-size: 1.6rem;
       
    }


    span{
        color: ${(props)=>props.theme['red-700']};
        font-weight:400;   
    }

`


export const CardDescription = styled.section`
    
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
        text-align: center;
        width:80%;
        border-bottom: 2px solid rgba(199, 41, 64, 0.3);
        font-size: 1.2rem;
        white-space: nowrap;
        padding: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

       

        img{
            width: 1.5rem;
        }

        
    }

`
interface ButtonCardProps {
    variant?: string
}

export const CardButton = styled.button<ButtonCardProps>`
    border: none;
    border-radius: 8px;
    width: 70%;
    height:10%;
    padding: 0.3rem;
    background-color: ${(props)=> props.theme['yellow-700']};
    font-weight: 700;
    font-size: 1rem;
    
    &:hover{
        cursor: pointer;
    }

    ${(props) =>
        props.variant === 'black' &&
    css`
      background: ${props.theme['gray-900']};
      color: ${(props)=> props.theme['gray-100']};
    `}

`
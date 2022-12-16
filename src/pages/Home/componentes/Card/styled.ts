import styled, {css} from "styled-components";


export const CardContainer = styled.div`
    
    width: 23vw;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    
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
    background: ${(props)=>props.theme['red-700']};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 4rem;
        color: ${(props)=>props.theme['gray-100']};
    }

    span{
        font-size: 2rem;
        color: ${(props)=>props.theme['yellow-700']};
    }

    ${(props) =>
        props.variant === 'black' &&
    css`
      background: ${props.theme['gray-900']};
    `}

`




export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 2rem;
        font-weight:700;
        color: ${(props)=> props.theme['gray-900']};
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
    gap: 1.7rem;

    span{
        text-align: center;
        width:80%;
        border-bottom: 2px solid rgba(199, 41, 64, 0.3);
        font-size: 1.3rem;
        white-space: nowrap
    }

`

export const CardButton = styled.button`
    border: none;
    border-radius: 8px;
    width: 70%;
    padding: 0.3rem;
    background-color: ${(props)=> props.theme['yellow-700']};
    font-weight: 700;
    font-size: 1rem;
    
    &:hover{
        cursor: pointer;
    }

`
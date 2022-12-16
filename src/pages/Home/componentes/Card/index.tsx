import {CardContainer, CardMain, CardInformation, CardDescription, CardButton,  CardHeader} from "./styled"

interface FlatValue{
    value: string;
    variant?: string;
    plan:string;
}

export function Card({value, variant, plan}:FlatValue){



    return(
        <CardContainer>
            <CardMain>
                <CardHeader variant={variant}>
                    <p>{plan}</p>
                    <span>Megas</span>
                </CardHeader>
                <CardInformation>
                    <p>R$ {value}</p>
                    <span>Por mês</span>
                </CardInformation>
                <CardDescription>
                    <span>Mais velocidade</span>
                    <span>Garantia de qualidade</span>
                    <span>Suporte especializado</span>
                </CardDescription>
            </CardMain>
            
            <CardButton>Contratar</CardButton>
        </CardContainer>
    )
}
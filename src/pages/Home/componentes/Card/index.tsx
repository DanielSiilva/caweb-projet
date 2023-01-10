import {CardContainer, CardMain, CardInformation, CardDescription, CardButton,  CardHeader} from "./styled"

import velocity from "../../../../assets/Vectoricon_velocidade.svg"
import signal from "../../../../assets/Vectorwifi.svg"
import attendance from "../../../../assets/Vectoratendimento.svg"


interface FlatValue{
    value?: string[] | string;
    variant?: string;
    plan?:string;
    time?:string;
    month?:string;
    description?:string;
}

export function Card({value, variant, plan,time, month, description}:FlatValue){



    return(
        <CardContainer>
            <CardMain>
                <CardHeader variant={variant}>
                    <p>{plan}</p>
                    <span>{time}</span>
                </CardHeader>
                <CardInformation>
                    <p>{value}</p>
                    <span>{month}</span>
                    <p>{description}</p>
                </CardInformation>
                <CardDescription>
                    <span> 
                        <img src={velocity} />
                        Mais velocidade
                    </span>

                    <span>
                        <img src={signal} />
                        Garantia de qualidade
                    </span>

                    <span>
                        <img src={attendance} />
                        Suporte especializado
                    </span>
                </CardDescription>
            </CardMain>
            
            <CardButton variant={variant}> 
                <a href="https://api.whatsapp.com/send?phone=559981697800&text=Olá queria saber um pouco mais sobre os planos">
                    Contratar
                </a>
            </CardButton>
        </CardContainer>
    )
}
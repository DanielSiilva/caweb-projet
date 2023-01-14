import { HeaderContainer } from "./styled"

import Logo from "../../assets/logo.svg"

export function Header (){


    return(
        <HeaderContainer>
            <img src={Logo} title='Logo' />

            <nav>
                <a href="#">Planos</a>

                <a href="https://api.whatsapp.com/send?phone=559981697800&text=Olá! por gentileza, poderia me enviar o 2° do meu boleto?">
                    Segunda via de Boletos
                </a>

                <a href="#">Contatos</a>
            </nav>
        </HeaderContainer>
    )
}
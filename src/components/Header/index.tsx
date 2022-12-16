import { HeaderContainer } from "./styled"

import Logo from "../../assets/logo.svg"

export function Header (){


    return(
        <HeaderContainer>
            <img src={Logo} title='Logo' />

            <nav>
                <a href="#">Cadastros</a>
                <a href="#">Usúarios</a>
                <a href="#">Planos</a>
                <a href="#">Contatos</a>
            </nav>
        </HeaderContainer>
    )
}
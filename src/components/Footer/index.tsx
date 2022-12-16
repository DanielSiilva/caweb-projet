import { FooterContainer,FooterDescription, FooterRights, FooterSocialNetworks,FooterContacts, FooterLogo } from "./styled";

import LogoFooter from '../../assets/logo.svg'

import Facebook from "../../assets/facebook.svg"
import Email from "../../assets/email.svg"
import Instagram from "../../assets/instagram.svg"
import Whats from "../../assets/whats.svg"

export function Footer(){


    return (
        <FooterContainer>
            <FooterDescription>
                <FooterLogo>
                    <img src={LogoFooter} />
                </FooterLogo>

                <FooterSocialNetworks>
                     <p>Siga nossas redes sociais</p>
                     <div>
                          <img src={Facebook}/> 
                          <img src={Email}/> 
                          <img src={Instagram}/> 
                          <img src={Whats}/> 
                     </div>
                </FooterSocialNetworks>

                <FooterContacts>
                    <p>Central de Ajuda</p>
                    <span>(99) 98567-7654</span>
                    <span>(99) 98567-7654</span>
                    <span>Cawebassistencia@gmail.com</span>
                </FooterContacts>
            </FooterDescription>
            <FooterRights>
                <p> 
                    © 2022 Todos direitos reservados | desenvolvido por 
                    <span> Davi Belchior</span>
                </p>
            </FooterRights>
        </FooterContainer>
    )
}
import { Contacts, FooterContainer,FooterDescription, FooterRights, LogoContainer, SocialNetworks } from "./styled";

import LogoFooter from '../../assets/logo.svg'

import Facebook from "../../assets/facebook.svg"
import Email from "../../assets/email.svg"
import Instagram from "../../assets/instagram.svg"
import Whats from "../../assets/whats.svg"

export function Footer(){


    return (
        <FooterContainer>
            <FooterDescription>
                <LogoContainer>
                    <img  src={LogoFooter}/>
                </LogoContainer>

                <SocialNetworks>
                    <p>Siga nosssas redes sociais</p>

                    <div>
                        <img src={Facebook}/>
                        <img src={Email}/>
                        <img src={Instagram}/>
                        <img src={Whats}/>
                    </div>
                </SocialNetworks>

                <Contacts>
                    <p>Central de Ajudas</p>
                    <span>(99) 98133-8612</span>
                    <span>(99) 98169-7800</span>
                    <span>cawebinformatica@gmail.com</span>
                </Contacts>

            </FooterDescription>
            
            <FooterRights>
                <p> 
                    © 2022 Todos direitos reservados | desenvolvido por 
                    <span> <a href="https://www.linkedin.com/in/daniel-da-silva-de-sousa-555a55226/">Daniel Sousa</a></span>
                </p>
            </FooterRights>
        </FooterContainer>
    )
}
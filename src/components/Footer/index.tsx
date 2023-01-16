import {FooterContainer, FooterItems,Footerr, Help, Logo, SocialNetworks, Branches, DownloadApp} from "./styled";

import LogoFooter from '../../assets/logo.svg'

import Facebook from "../../assets/facebook.svg"
import Email from "../../assets/email.svg"
import Instagram from "../../assets/instagram.svg"
import Whats from "../../assets/whats.svg"
import AppStory from "../../assets/App-story-PNG.png"
import PlayStory from "../../assets/play-story-PNG.png"

export function Footer(){


    return (
        <>
            <FooterContainer>
                <FooterItems>
                    <Logo>
                        <img src={LogoFooter} />
                    </Logo>

                    <SocialNetworks>
                        <span>Siga nossas redes sociais </span>

                        <section>
                            <a href="">
                                <img src={Facebook}/>
                            </a>
                            
                            <a href="">
                                <img src={Email}/>
                            </a>

                            <a href="">
                                <img src={Instagram}/>
                            </a>

                            <a href="">
                                <img src={Whats}/>
                            </a>
                        </section>
                    </SocialNetworks>

                    <Help>
                        <span>Central de Ajudas </span>

                        <section>
                            <p> (99) 98133-8612</p>
                            <p>(99) 98169-7800</p>
                            <p>cawebinformatica@gmail.com</p>
                        </section>
                    </Help>

                    <Branches>
                        <span>Filiais</span>

                        <section>
                            <p> Codó - MA</p>
                            <p>Timbiras - Ma</p>
                        </section>
                    </Branches>

                    <DownloadApp>
                        <span>Baixe nosso App</span>

                        <section>
                            <a href="">
                                <img src={PlayStory}/>
                            </a>
                            
                            <a href="">
                                <img src={AppStory}/>
                            </a>
                        </section>
                    </DownloadApp>

                </FooterItems>
            </FooterContainer>

            <Footerr>
                <p>   C 2022 Todos direitos reservados | desenvolvido por <span> Davi Belchior</span> </p>
            </Footerr>
        </>
        
    )
}
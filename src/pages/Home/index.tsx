import { MainBanner,MainSlogan,MainContainer,MainCard, WhatsappBox } from "./styles";

import banner from "../../assets/bannerOficial.svg"
import Whatsapp from "../../assets/whatsappFix.svg"

import { Card } from "./componentes/Card";



export function Home(){



   return(
        <MainContainer>
            <MainBanner>
                  <img  src={banner}/>
            </MainBanner>
            <MainSlogan>
               <span>AQUI VOCÊ FAZ O SEU PLANO</span>
            </MainSlogan>

            {/* Teste */}
            <WhatsappBox>
                <a 
                    href="https://api.whatsapp.com/send?phone=5562994524747&text=Queria uma informação sobre um produto" >
                    <img   src={Whatsapp}  title='Entre em contato conosco'/>
                </a>
            </WhatsappBox>



            <MainCard>
              <Card 
                  value={'80,00'}
                  plan='50'              
               />
              <Card
                  value={'100,00'}
                  plan='550'   
               />
              <Card
                  value={'00,00'}
                  variant={'black'}
                  plan='1000' 
              />
            </MainCard>
        </MainContainer>
   )   
}
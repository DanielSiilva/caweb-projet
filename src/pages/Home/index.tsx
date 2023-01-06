import { MainBanner,MainSlogan,MainContainer,MainCard, WhatsappBox } from "./styles";

import banner from "../../assets/bannerOficial.svg"
import Whatsapp from "../../assets/whatsappFix.svg"

import { Card } from "./componentes/Card";



export function Home(){



   return(
        <MainContainer>
            <MainBanner>
                  {/* <img  src={banner}/> */}
            </MainBanner>
            <MainSlogan>
               <span>AQUI VOCÊ FAZ O SEU PLANO</span>
            </MainSlogan>

            {/* Botão waths nova feature*/}
            <WhatsappBox>
                <a 
                    href="https://api.whatsapp.com/send?phone=559981697800&text=Queria uma informação sobre um produto" >
                    <img   src={Whatsapp}  title='Entre em contato conosco'/>
                </a>
            </WhatsappBox>



            <MainCard>
              <Card 
                  value={'R$ 80,00'}
                  plan='50'
                  time='Megas' 
                  month="Por mês"             
               />
              <Card
                  value={'R$ 100,00'}
                  plan='550' 
                  time='Megas' 
                  month="Por mês"     
               />
              <Card
                  variant={'black'}
                  plan='OUTROS' 
                  time='Planos' 
                  description={`
                    Fale conosco e personalise seu plano

                  `}  
              />
            </MainCard>
        </MainContainer>
   )   
}
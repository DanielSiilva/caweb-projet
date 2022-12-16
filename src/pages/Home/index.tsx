import { MainBanner,MainSlogan,MainContainer,MainCard } from "./styles";

import banner from "../../assets/posterMenor.jpg"

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
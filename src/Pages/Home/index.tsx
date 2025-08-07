
import { useEffect } from 'react';
import { ContainerHome, ContainerMain, SubMain } from './styles'

import Header from '../../Components/Header'
import Estrelas from '../../assets/icons/estrela.png'
import Linhas from '../../Components/Linhas'

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerHome>
      <Header />

      <ContainerMain>

        <h1 className='onde'>ONDE A <br />
          MUSICA <br />
          GANHA VIDA</h1>

        <p>STREAMING DE MUSICA NA VIREMUSIC</p>

       <a href="Cadastro"> <button>
          Cadastre-se de graça
        </button>
        </a>

        <div className='Estrelas'>
          <img width={35} src={Estrelas} alt="" />
          <img width={35} src={Estrelas} alt="" />
          <img width={35} src={Estrelas} alt="" />
          <img width={35} src={Estrelas} alt="" />
          <img width={35} src={Estrelas} alt="" />

        </div>
        <p className='Estrelap'>Mais de 100 classificações de 5 estrelas</p>
      </ContainerMain>

      <SubMain>
        <h3>Escolha a oferta que combina com voçê.</h3>

        <div data-aos="zoom-in-up" className='premium'>
          <h4>PREMIUM</h4>
          <h2>1 MÊS GRATIS</h2>
          <p>A partir daí, R$ 4,90/mês</p>
          <button>Experimente de graça</button>
          <p>*Mais de 1000 musicas</p>
          <p>*Playlists só para voçê</p>
          <p>*Musica sem anúncios</p>
          <p>*Escute offline</p>
        </div>

        <div data-aos="fade-up" className='Free'>
          <h4> VIRE FREE</h4>
          <h2>STREAMING <br />
            GRATIS</h2>
          <p>A partir daí, R$ @00,00</p>
         <a href="Cadastro"> <button>Cadastre-se de graça</button> </a> 
          <p>*Mais de 1000 musicas</p>
          <p>*Playlists só para voçê</p>


          <div className='flap'>
            <p>Musica sem anúncios</p>
            <p>Escute offline</p>
          </div>
        </div>

        <button className='butt'>Descubra todos os nossos planos</button>

        <h1>
          Tá procurando aquele som que arrepia? <br />
          Eu já deixei separado pra você, com altissima qualidade.
        </h1>
        <Linhas />


      </SubMain>

    </ContainerHome>
  )
}

export default Home

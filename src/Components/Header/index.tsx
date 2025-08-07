import { ContainerHeader } from './styles'
import Logo from '../../assets/Logo/LogoVire.png'

const Header = () => {
  return (
    <ContainerHeader>

      <img width={70} src={Logo} alt="" />
      <h1>
        Viremusic
      </h1>

      <ul>
        <a href=""><li>Planos</li></a>
        <a href="Detalhe"><li>Caracteristicas</li></a>
       <a href=""><li>Musica</li> </a>
      </ul>

      <a href="Login"><button className='Conect'>Conecte-se </button></a>
      <a href="Cadastro"><button className='Inscre'>Inscrever-se</button></a>

    </ContainerHeader>
  )
}

export default Header

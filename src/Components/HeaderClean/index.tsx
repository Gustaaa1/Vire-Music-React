import { ContainerHeaderClean } from './styles'
import Logo from '../../assets/Logo/LogoVire.png'
import Procurar from '../../assets/icons/procurar.png'
import Rosto from '../../assets/imgs/Rosto.png'

const HeaderClean = () => {
  return (
    
    <ContainerHeaderClean>
      <img width={70} src={Logo} alt="" />
      <h1>Viremusic</h1>

      <img className='Procurar' width={30} src={Procurar} alt="" />
      <input placeholder='Procurar Musicas' type="search" />

      <ul>
        <a href=""><li>Inicio</li></a>
        <a href=""><li>Playlists</li> </a>
        <a href=""><li>Favoritos</li> </a>
      </ul>
      <img width={40} className='Rosto' src={Rosto} alt="" />
    </ContainerHeaderClean>
  )
}

export default HeaderClean

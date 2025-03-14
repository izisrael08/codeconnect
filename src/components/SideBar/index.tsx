import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/perfil.svg";
import SobreNos from "./assets/sobre-nos.svg";
import Sair from "./assets/sair.svg";
import './styles.css';

export function SideBar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />

      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link__publicacao">Publicar</a>
          </li>
          <li>
            <a href="#" className="item__link item__link--active">
              <img src={Feed} alt="" />
              <samp>Feed</samp>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Perfil} alt="" />
              <samp>Perfil</samp>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={SobreNos} alt="" />
              <samp>Sobre-Nos</samp>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Sair} alt="" />
              <samp>Sair</samp>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

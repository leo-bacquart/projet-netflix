import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'
import {HeaderLi, HeaderUl, HeaderWrapper} from "../style/Style.jsx";
import logo from '../assets/Netflix_logo.svg';
import bell from '../assets/notifications.svg';
import kids from '../assets/Netflix_jeunesse.svg';
import pen from '../assets/pen.svg';
import profil_info from '../assets/profile.svg';
import transfert from '../assets/transfer.svg';
import help from '../assets/help.svg';
import profile from '../assets/profile_icon.png';
import SearchBar from "./Search";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className={'headerWrapper'}>
      <nav>
        
        <ul>
          <li>
          <Link to="/"><img src={logo} alt="Netflix logo"></img></Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/series">Séries</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/new">Nouveautés les plus regardées</Link>
          </li>
          <li>
            <Link to="/list">Ma liste</Link>
          </li>
        </ul>
        <SearchBar/>

        <a href="#" className="notifs">
          <img src={bell} alt="Notifications"></img>
        </a>

        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img src={profile} alt="menu profile"></img>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu" id="dropdown-menu">
              <li>
                <img className={'jeunesse'} src={kids} alt="Profil jeunesse"></img>
                <a href="#">Jeunesse</a>
              </li>
              <li>
                <img src={pen} alt="Gestion des profils"></img>
                <a href="#">Gérer les profils</a>
              </li>
              <li>
                <img src={transfert} alt="Transfert d'un profile"></img>
                <a href="#">Transférer un profil</a>
              </li>
              <li>
                <img src={profil_info} alt="Infos profile"></img>
                <a href="#">Compte</a>
              </li>
              <li>
                <img src={help} alt="Centre d'assistance"></img>
                <a href="#">Centre d'assistance</a>
              </li>
              <div className="logout" >
              <a href="#">Déconnexion</a>
              </div>
            </ul>
          )}
        </div>

      </nav>
    </div>
  )
};

export default Header;

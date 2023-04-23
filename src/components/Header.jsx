import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'
import {HeaderLi, HeaderUl, HeaderWrapper} from "../style/Style.jsx";
import logo from '../assets/Netflix_logo.svg';
import bell from '../assets/notifications.svg';
import profile from '../assets/profile_icon.png';
import SearchBar from "./Search";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className={'headerWrapper'}>
      <nav>
        <img src={logo} alt="Netflix logo"></img>
        <ul>
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


        <a href="#" className="notifs">
          <img src={bell} alt="Notifications"></img>
        </a>

        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img src={profile} alt="menu profile"></img>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu" id="dropdown-menu">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </div>

      </nav>
    </div>
  )
};

export default Header;

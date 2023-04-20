import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'
import {HeaderLi, HeaderUl, HeaderWrapper} from "../style/Style.jsx";
import logo from '../assets/Netflix_logo.svg';
import SearchBar from "./Search";

const Header = () => {

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
              <SearchBar/>
          </nav>

        </div>
      )
    };

export default Header
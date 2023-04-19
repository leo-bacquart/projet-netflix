import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'
import {HeaderLi, HeaderUl, HeaderWrapper} from "../style/Style.jsx";
import car from '../assets/Netflix_logo.svg';
import SearchBar from "./Search";

const Header = () => {

    return (
        <HeaderWrapper>
          <nav>
            <img src={car} alt="Netflix logo"></img>
            <HeaderUl>
              <HeaderLi>
                <Link to="/">Accueil</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/series">Séries</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/films">Films</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/new">Nouveautés les plus regardées</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/list">Ma liste</Link>
              </HeaderLi>
            </HeaderUl>
          </nav>
          <SearchBar></SearchBar>
        </HeaderWrapper>
      )
    };

export default Header
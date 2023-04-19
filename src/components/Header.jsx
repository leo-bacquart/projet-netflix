import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'
import {HeaderLi, HeaderUl, HeaderWrapper} from "../style/Style.jsx";
import car from '../assets/Netflix_logo.svg';

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
                <Link to="/blogs">Séries</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/contact">Films</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/contact">Nouveautés les plus regardées</Link>
              </HeaderLi>
              <HeaderLi>
                <Link to="/contact">Ma liste</Link>
              </HeaderLi>
            </HeaderUl>
          </nav>
        </HeaderWrapper>
      )
    };

export default Header
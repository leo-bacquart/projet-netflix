import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import {HeaderLi, HeaderWrapper} from "../style/Style.jsx";

const Header = () => {

    return (
        <HeaderWrapper>
          <nav>
            <ul>
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
            </ul>
          </nav>
        </HeaderWrapper>
      )
    };

export default Header
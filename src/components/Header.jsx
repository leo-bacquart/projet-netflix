import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style/Header.scss'

const Header = () => {

    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/blogs">Séries</Link>
              </li>
              <li>
                <Link to="/contact">Films</Link>
              </li>
              <li>
                <Link to="/contact">Nouveautés les plus regardées</Link>
              </li>
              <li>
                <Link to="/contact">Ma liste</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    };

export default Header
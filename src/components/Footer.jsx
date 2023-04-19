import * as React from "react";
import { Nav } from "../style/Style";

const Footer = () => {

    return (
        <Nav>
             <ul className="liste1">
                <li>Audiodescription</li>
                <li>Centre d'aide</li>
                <li>Cartes cadeaux</li>
                    
            </ul>
            <ul className="liste2">
                <li>Relations Investisseurs</li>
                <li>Recrutement</li>
                <li>Boutique Netflix</li>
            </ul>
            <ul className="liste3">
                 <li>Confidentialité</li>
                <li>Informations légales</li>
                <li>Preferences de cookies</li>
            </ul>
         </Nav>
    )
}

export default Footer
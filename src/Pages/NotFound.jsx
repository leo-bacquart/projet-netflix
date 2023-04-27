import {Link} from "react-router-dom";
import * as React from "react";
import '../style/NotFound.scss'
import FondEcran from "../assets/UpsideDown.png"

const NotFound = () => {
    return (
        <div className="PageErreur">
            <img src={FondEcran} alt="UpsideDownFond"></img>
            
            <h2>Oups, vous semblez perdu</h2>
            <h1>Erreur 404 :</h1>
            <p>Page inexistante</p>

        </div>

    )
}

export default NotFound
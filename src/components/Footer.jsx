import * as React from "react";

const Footer = () => {

    return (
       
           
        <nav>
             <div className="liens">
                <a href="https://www.facebook.com/netflixfrance" target="blank">
                <img className="facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZU2gzuQOReQPDQuaDXrfbqB0gXkItLcKcE55-WNc&s" alt="" />
                </a>

                <a href="https://www.instagram.com/NetflixFR" target="blank">
                <img src="https://www.metropolenicecotedazursports.com/wp-content/uploads/2017/11/instagram-logo-white.png" alt="" />
                </a>
                <a href="https://twitter.com/NetflixFR" target="blank">
                <img src="data:image/png;base64,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" alt="" />
                </a>
                <a href="https://www.youtube.com/user/netflixfrance" target="blank">
                <img src="data:image/png;base64,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" alt="" />
                </a>

                
            </div>


            
            
            
            
                <ul className="liste1 liste">
                    <a href="https://www.netflix.com/browse/audio-description" target="blank">
                    <li>Audiodescription</li>
                    </a>
                    <a href="https://help.netflix.com/" target="blank">
                    <li>Centre d'aide</li>
                    </a>
                    <a href="https://www.netflix.com/redeem">
                    <li>Cartes cadeaux</li>
                    </a>
                    <br />
                    <button>Service Code</button>
                    <br />
                    <br />
                    <span className="description">© 1997-2023 Netflix, Inc.</span>
                        
                </ul>
                <ul className="liste2 liste">
                    <a href="http://ir.netflix.com/">
                    <li>Relations Investisseurs</li>
                    </a>
                    <a href="https://jobs.netflix.com/">
                    <li>Recrutement</li>
                    </a>
                    <a href="https://netflix.shop/">
                    <li>Boutique Netflix</li>
                    </a>
                </ul>
                <ul className="liste3 liste">
                    <a href="https://help.netflix.com/legal/privacy">
                    <li>Confidentialité</li>
                    </a>
                    <a href="https://help.netflix.com/legal/notices">
                    <li>Informations légales</li>
                    </a>
                    <a href="https://www.netflix.com/Cookies">
                    <li>Preferences de cookies</li>
                    </a>
                </ul>
            
                
            
            
         </nav>
    )
}

export default Footer
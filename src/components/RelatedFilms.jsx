import * as React from "react";
import * as API from "./callAPI.jsx";
import '../style/Carousel.scss'
import {Link, Route} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const List = ({params, children}) => { /* params = paramètres de recherche dans l'API, children = Prend en paramètre le contenu de la balise */
    const [movieList, setMovieList] = React.useState([]) /* Création state MovieList, définition par un tableau vide */

    React.useEffect(() => {
        /* Call GET API  */
        fetch(`${API.ID}${params}?api_key=${API.KEY}`) /* Lien d'appel de l'api */
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [] /* Pas de dépendance, la fonction s'éxécute une seule fois */)


    return (
    
        <div className={'carousel'}>
            <h2>{children}</h2>
            <div className="react-multi-carousel-list  ul">
                <ul className="react-multi-carousel-track " 
                style={{transition: 'none 0s ease 0s', overflow: "'", transform: 'translate3d(0px, 0px, 0px)'}}>
                {movieList.map((movie) => <Item key={movie.id} movie={movie}/> )} {/* Création d'une instance movie par partie du tableau */}
                </ul>
                    <button aria-label="Go to previous slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left " type="button"></button>
            <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right " type="button"></button>
            </div>
        </div>
    )
}


const Item = ({movie}) => {
    const [estSurvol, setEstSurvol] = React.useState(false);
    React.useEffect(() => {
        setEstSurvol(estSurvol)
    }, [estSurvol])
    const handleMouseEnter = () => {
        setEstSurvol(true);
      }
    
      const handleMouseLeave = () => {
        setEstSurvol(false);
      }
    <li className={!estSurvol ? 'react-multi-carousel-item react-multi-carousel-item--active li' : 'react-multi-carousel-item react-multi-carousel-item--active li li--box-shadow'} key={movie.key} 
        style={{flex: '1 1 auto', position: 'relative'}} aria-hidden="false" data-index="0"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
           {
            estSurvol === false 
            ?
                <>  
                <Link to={`/details/${movie.id}`} onClick={()=>window.location.href(`/details/${movie.id}`)}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}/> {/*Récupération de l'affiche*/}
                </Link>
            </> 
            :
            <div style={{
                width: "100%",
              
                 padding: 0,
                  borderRadius: '8px'
                  
                 }}>
                 {/* <Link to={`/details/${movie.id}`} onClick={()=>window.location.href(`/details/${movie.id}`)}> */}
                    <Link to={`/details/${movie.id}`}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}
                        style={{
                            width: '100%',
                            objectFit: 'fill',
                            padding: 0
                         }}
                         /> {/*Récupération de l'affiche*/}
                    </Link>
            </div>
         }
        </li>
}

export default List
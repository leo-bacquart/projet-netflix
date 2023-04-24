import * as React from "react";
import * as API from "./callAPI.jsx";
import '../style/Carousel.scss'
import {Link, Route} from "react-router-dom";
import Details from "../Pages/Details.jsx";
import Search from "./Search.jsx";

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
            <ul>
                {movieList.map((movie) => <Item key={movie.key} movie={movie}/> )} {/* Création d'une instance movie par partie du tableau */}
            </ul>
        </div>
    )
}


const Item = ({movie}) => (
    <li>
        <Link to={`details/${movie.id}`}>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}/> {/*Récupération de l'affiche*/}
        </Link>
    </li>
)

export default List
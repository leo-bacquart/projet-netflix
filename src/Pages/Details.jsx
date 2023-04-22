import * as React from "react";
import {useParams} from "react-router-dom";
import * as API from "../components/callAPI.jsx";
import '../style/Details.scss';

const Details = () => {
    const { movie_id } = useParams();
    const [movie, setMovie] = React.useState([])

    React.useEffect(() => {
        fetch(`${API.ID}/movie/${movie_id}?api_key=${API.KEY}&language=fr`) /* Lien d'appel de l'api */
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
                console.log(data)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    const backdropImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

    return (
        <div className={'details'}>
            <img src={backdropImg} alt="backdrop"/>
<<<<<<< HEAD
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
=======
>>>>>>> 51785e3ed362fb184ec41d3ca21d9fa0e1963d32
            <div className={'gradient'}/>
            <h1>{movie.title}</h1>

        </div>


    )
}

export default Details
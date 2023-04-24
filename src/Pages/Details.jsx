import * as React from "react";
import {useParams} from "react-router-dom";
import * as API from "../components/callAPI.jsx";
import '../style/Details.scss';
import List from "../components/RelatedFilms.jsx";

const Details = () => {
    const { movie_id } = useParams();
    const [movie, setMovie] = React.useState([])

    React.useEffect(() => {
        fetch(`${API.ID}/movie/${movie_id}?api_key=${API.KEY}&language=fr`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    const backdropImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

    return (
        <>
        <div className={'details'}>
            <img src={backdropImg} alt="backdrop"/>
            <div className={'gradient'}/>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
        <List params={`/movie/${movie_id}/similar?api_key=${API.KEY}&language=fr`}>Films associés</List>
        </>
    )
}

export default Details
import * as React from "react";
import * as API from "./callAPI.jsx";


const GenderList = ({params}) => {
    const [movieList, setMovieList] = React.useState([])

    React.useEffect(() => {
        fetch(`${API.ID}${params}&api_key=${API.KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [params])

    return (
        <div className="gender">
            <ul>
                {movieList.map((movie) => <MovieItem key={movie.id} movie={movie}/> )}
            </ul>
        </div>
    )
}

const MovieItem = ({movie}) => (
    <li>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title + " poster"}/>
        <div className="details">
            
        </div>
    </li>
)

export default GenderList;

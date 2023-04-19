import * as React from "react";
import * as API from "./callAPI.jsx";

const List = ({params, children}) => {
    const [movieList, setMovieList] = React.useState([])

    React.useEffect(() => {
        fetch(`${API.ID}${params}?api_key=${API.KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setMovieList(data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    return (
        <div>
            <h2>{children}</h2>
            <ul>
                {movieList.map((movie) => <Item key={movie.key} movie={movie}/> )}
            </ul>
        </div>
    )
}


const Item = ({movie}) => (
    <li>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.key + "poster"}/>
    </li>
)

export default List
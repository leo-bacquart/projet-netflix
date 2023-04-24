import * as React from "react";
import * as API from "./callAPI.jsx";
import '../style/Series.scss'

const Series = ({params, children}) => {
    const [tvList, setTvList] = React.useState([])

    React.useEffect(() => {
        fetch(`${API.ID}${params}?api_key=${API.KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setTvList(data.results);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    return (
        <div className={'tv'}>
            
            <ul>
                {tvList.map((tv) => <Item key={tv.key} tv={tv}/> )}
            </ul>
        </div>
    )
}

const Item = ({tv}) => (
    <li>
        <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt={tv.key + "poster"}/>
        <div className="details">
            
        </div>
    </li>
)

export default Series;
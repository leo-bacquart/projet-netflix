import * as React from "react";
import List from "../components/MovieCarousel.jsx";


const Home = () => {

    return (
        <div>
            <List params={'/trending/movie/day'}>Tendance</List>
            <List params={'/movie/now_playing'}>En ce moment</List>
        </div>
    )

}

export default Home

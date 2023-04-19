import * as React from "react";
import List from "../components/MovieCarousel.jsx";


const Home = () => {

    return (
        <List params={'/trending/movie/day'}>Tendance</List>
        <List params='/movie/now_playing'>En ce moment</List>
    )

}

export default Home

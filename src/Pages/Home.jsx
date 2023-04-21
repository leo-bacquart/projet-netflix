import * as React from "react";
import List from "../components/MovieCarousel.jsx";


const Home = () => {

    return (
        <div>
            <List params={'/trending/movie/day'}>Tendances</List>
            <List params={'/movie/now_playing'}>En ce moment</List>
            <List params={'/movie/popular'}>Populaires</List>
            <List params={'/movie/top_rated'}>Les mieux notés</List>
            <List params={'/movie/upcoming'}>À venir</List>
        </div>
    )

}

export default Home

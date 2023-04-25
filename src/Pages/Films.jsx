import * as React from "react";
import GenderList from "../components/GenderList.jsx";

const FilmsCategory = () => {
    // Replace 28 with the ID of the desired genre
    const genreId = 28;

    return (
        <GenderList params={`/discover/movie?with_genres=${genreId}`} />
    )
}

export default FilmsCategory;

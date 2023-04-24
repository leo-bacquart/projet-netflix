import * as React from "react";
import Series from "../components/Series.jsx";

const SeriePage = () => {
    return (
        <Series params={'/tv/popular'}>Popular TV Shows</Series>
    )
}

export default SeriePage;
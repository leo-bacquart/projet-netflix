import * as React from "react";
import List from "../components/MovieCarousel.jsx";

const Films = () => {
  return (
    <List params={'/movie/now_playing'}>En ce moment</List>
  )
}

export default Films;
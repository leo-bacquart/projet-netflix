import * as React from 'react';
import './App.scss';
import List from "./components/MovieCarousel.jsx";

function App() {
    return (
        <div>
            <h1>Netflix</h1>
            <List params='/trending/movie/day'>Tendance</List>
        </div>
    )
}

export default App

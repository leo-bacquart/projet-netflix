import * as React from 'react';
import './App.scss';
import Home from "./Pages/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style/reset.scss';
import './fonts/Netflix Sans Light.otf';
import './fonts/Netflix Sans Medium.otf';
import './fonts/Netflix Sans Bold.otf';
import Series from "./Pages/Series.jsx";
import Films from "./Pages/Films.jsx";
import Nouveautes from "./Pages/Nouveautes.jsx";
import List from "./components/MovieCarousel.jsx";
import Liste from "./Pages/Liste.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Details from "./Pages/Details.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path={"series"} element={<Series/>}/>
                    <Route path={'films'} element={<Films/>}/>
                    <Route path={'new'} element={<Nouveautes/>}/>
                    <Route path={'list'} element={<Liste/>}/>
                    <Route path={'details/:movie_id'} element={<Details/>}/>
                    <Route path={'*'} element={<NotFound/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

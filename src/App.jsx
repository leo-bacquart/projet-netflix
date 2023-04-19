import * as React from 'react';
import './App.scss';
import Home from "./Pages/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style/reset.scss';
import './fonts/Netflix Sans Light.otf';
import './fonts/Netflix Sans Medium.otf';
import './fonts/Netflix Sans Bold.otf';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

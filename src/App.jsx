import * as React from 'react';
import './App.scss';
import Home from "./Pages/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style/reset.scss'

function App() {
    const [selectedMovie, setSelectedMovie] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('selectedMovie', selectedMovie);
    }, [selectedMovie]);

    const handleSearch = (event) => {
        setSelectedMovie(event.target.value);
    }

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

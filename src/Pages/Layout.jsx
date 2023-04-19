import Home from "./Home.jsx";
import * as React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = () => {

    return (
        <>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )

}

export default Layout
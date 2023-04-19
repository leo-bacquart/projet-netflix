import Home from "./Home.jsx";
import * as React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <Outlet></Outlet>
    )

}

export default Layout
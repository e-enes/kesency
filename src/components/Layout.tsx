import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
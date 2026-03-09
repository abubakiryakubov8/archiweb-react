import React from 'react'
import ContactCom from './contact.jsx'
import Home from './home.jsx'
import Navbar from './navbar.jsx'
import Product from './product.jsx'
import { Routes, Route } from "react-router-dom";
import { Notfound } from './notfound.jsx'
import AboutComponent from './about.jsx'

const RouterComp = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<ContactCom />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="*" element={<Notfound />} />
            </Routes>

        </>
    );
};
export default RouterComp

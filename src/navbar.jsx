import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <Link to={'/home'}>
                <div style={{ cursor: "pointer" }}>Home</div>
            </Link>
            <Link to={'/product'}>
                <div style={{ cursor: "pointer" }}>Product</div>
            </Link>
            <Link to={'/about'}>
                <div style={{ cursor: "pointer" }}>About</div>
            </Link>
            <Link to={'/contact'}>
                <div style={{ cursor: "pointer" }}>Contact</div>
            </Link>
            <Link to={'/profile'}>
                <div style={{ cursor: "pointer" }}>Profile</div>
            </Link>
        </div>
    );
};

export default Navbar;
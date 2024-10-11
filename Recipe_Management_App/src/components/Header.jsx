// components/Header.js
import React from 'react';
import './App.css'

const Header = () => {
    return (
        <header className="restaurant-header">
            <div className="logo">
                <h1 style={{color:"white" }}>Grand Rio Restaurant</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

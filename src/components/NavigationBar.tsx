import React from "react";
import { Container } from "react-bootstrap";
import { SiNike } from "react-icons/si";
// import "./App.css";

function NavigationBar() {
    return (
        <Container>
            <nav className="navbar">
                <div className="logo">
                <SiNike className='logo-img' />
                    <a href="/">Theoutfitshop</a>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#about">About us</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>

            </nav>
        </Container>

    );
}

export default NavigationBar;

import React from "react";
import Navbar from "./Navbar.js";

// Styles
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <div className="nav-area">
                <a href="/#" className="logo">
                    <img src='images/logo192.png' alt="Logo2" id="navbar-image" />
                </a>
                <Navbar />
            </div>
        </header>
    );
}
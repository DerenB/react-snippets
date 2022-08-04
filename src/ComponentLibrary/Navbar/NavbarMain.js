import React from "react";
import NavbarList from "./NavbarList";

// Styles
import "./navbar.css";

export default function Header() {
    return (
        <header>
            <div className="nav-area">
                <a href="/#" className="logo">
                    <img src='images/logo192.png' alt="Logo2" id="navbar-image" />
                </a>
                <NavbarList />
            </div>
        </header>
    );
}
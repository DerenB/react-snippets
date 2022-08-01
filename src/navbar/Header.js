import React from "react";
import Navbar from "./Navbar.js";

// Import Data Items
import ListItemProjects from "./ListItemProjects";
import HeaderData from "./HeaderData";

// Styles
import "../styles/header.css";

export default function Header() {
    const projectItems = HeaderData.map(project => {
        return (
            <li>
                <ListItemProjects
                    id={project.id}
                    title={project.title}
                />
            </li>
        )
    })

    return (
        <header>
            <div className="nav-area">
                <a href="/#" className="logo">
                    <img src='images/logo192.png' alt="Logo2" id="navbar-image" />
                </a>
                <Navbar />
            </div>



            <div>
                <ul className="navbar">
                    <li>
                        
                    </li>
                    <li>
                        <a href="https://github.com/Deren-Web-Development-Projects" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="navbar-projects">
                        Projects
                        <ul className="navbar-list-projects">
                            {projectItems}
                        </ul>
                    </li>
                </ul>
            </div>



        </header>
    );
}
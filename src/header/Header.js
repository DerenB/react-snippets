import React from "react";
import ListItemProjects from "./ListItemProjects";
import HeaderData from "./HeaderData";
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
        <div>
            <ul className="navbar">
                <li>
                    <img src='images/logo192.png' alt="Logo2" id="navbar-image" />
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
    );
}
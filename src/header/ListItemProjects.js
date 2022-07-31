import React from "react";
import "../styles/header.css";

export default function ListItemProjects(props) {
    return (
        <div class="project-list-item">
            {props.title}
        </div>
    );
}
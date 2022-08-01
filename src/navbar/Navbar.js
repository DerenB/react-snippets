import React from "react";
import { menuItems } from "./MenuItems";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <Menu items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
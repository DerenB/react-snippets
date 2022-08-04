import React from "react";
import { menuList } from "./MenuList";
import MenuMain from "./MenuMain";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuList.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuMain items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
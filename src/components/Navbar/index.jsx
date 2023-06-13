import React from "react";
import { NAVIGATION_CONFIG } from "../../global/constant";
import Tab from "../core/Tab";

function Navbar() {
  return (
    <div className="flex w-full bg-white p-10 ">
      {NAVIGATION_CONFIG.map((navItem) => (
        <Tab
          isActive={navItem.path === "/your"}
          label={navItem?.label}
          key={navItem.id}
        />
      ))}
    </div>
  );
}

export default Navbar;

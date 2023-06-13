import React from "react";
import { NAVIGATION_CONFIG } from "../../global/constant";
import Tab from "../core/Tab";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex w-full bg-white p-10 ">
      {NAVIGATION_CONFIG.map((navItem) => (
        <Tab
          label={navItem?.label}
          key={navItem.id}
          isActive={location.pathname === navItem?.path}
          path={navItem.path}
        />
      ))}
    </div>
  );
}

export default Navbar;

import React from "react";
import Navbar from "../Navbar";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="shadow-grey">
      <h1 className="flex  items-center gap-15 p-20  pb-50 bg-white text-55 header-text-color">
        <img src={logo} alt="" className="logo" />
        Volopay Cards
      </h1>
      <Navbar />
    </div>
  );
}

export default Header;

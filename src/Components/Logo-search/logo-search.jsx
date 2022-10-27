import React from "react";
import "./logo-search.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <>
      <div className="LogoSearch">
        <img src={Logo} alt="logo" />
        <div className="Search">
          <input type="text" placeholder="#Explore" />
          <div className="Search-icon">
            <UilSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSearch;

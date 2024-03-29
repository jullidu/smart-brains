import React from "react";
import "./nav.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="nav">
      <p onClick={() => onRouteChange("signOut")} className="nav-sign">
        {" "}
        Sign Out{" "}
      </p>
    </nav>
  );
};

export default Navigation;

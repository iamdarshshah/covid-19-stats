import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#282c34" }}>
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            COVID-19
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

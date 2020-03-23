import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#282c34" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>COVID-19</code>
          </p>
        </header>
      </Link>
    </div>
  );
};

export default Header;

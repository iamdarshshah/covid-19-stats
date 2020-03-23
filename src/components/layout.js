import React from "react";
import Header from "./Header/header";
import Details from "./Details/details";
import Footer from "./Footer/footer";
import Dropdown from "./Dropdown/dropdownSelect";

const Layout = () => {
  return (
    <div>
      <Header />
      <Details />
      <Dropdown />
      <Footer />
    </div>
  );
};

export default Layout;

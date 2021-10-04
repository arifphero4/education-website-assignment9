import React from "react";
import './header.css';
import Navigation from "../navigation/Navigation.js";
import Search from "../search/Search.js";
const Header = () => {
  return (
    <div className="header">
      <div >
         <h1> Technique Easy Education</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda?</p>
      </div>
      <Navigation></Navigation>
      <div style={{ background: "grey" }}>
        <Search></Search>
      </div>
    </div>
  );
};

export default Header;

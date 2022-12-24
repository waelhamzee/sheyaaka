import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <div style={{ position: "relative" }}>
          <img src={require("../images/Ellipse 40.png")} alt="logo"/>
          <img src={require("../images/Path 37.png")} className="letter" alt="logo"/>
          <img src={require("../images/Path 35.png")} className="point-one" alt="point"/>
          <img src={require("../images/Path 35.png")} className="point-two" alt="point"/>
          <img src={require("../images/Path 35.png")} className="point-three" alt="point"/>
        </div>
        <div className="name-container">
          <img src={require("../images/Group 17.png")} alt="name"/>
        </div>
      </div>
      <div className="links-container">
        <div>
          <a href="#">Women</a>
        </div>
        <div>
          <a href="#">Men</a>
        </div>
        <div>
          <a href="#">Children</a>
        </div>
        <div>
          <a href="#">Gift Registries</a>
        </div>
      </div>
      <div className="settings-container">
        <div className="input-container">
          <input type="text" />
          <img src={require("../images/Icon feather-search.png")} alt="search"/>
        </div>
        <img src={require("../images/Icon feather-heart (1).png")} alt="heart"/>
        <img src={require("../images/Icon material-person.png")} alt="material"/>
        <img src={require("../images/Path 29.png")} alt="path"/>
      </div>
    </nav>
  );
};

export default Navbar;

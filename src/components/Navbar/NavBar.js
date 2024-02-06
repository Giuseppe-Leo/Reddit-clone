import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/reddit-logo.png";
import "./NavBar.css";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search =>", searchQuery);

    setSearchQuery("");
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search..."
              className="search-bar"
            />
          </form>
        </div>
        <div className="navbar-right">
          <Link className="nav-item">Item</Link>
          <Link className="nav-item">Item</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

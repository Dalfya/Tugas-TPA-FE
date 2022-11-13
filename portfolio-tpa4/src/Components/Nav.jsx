import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/my-logos.png"

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo"/>
      <ul className={open ? "nav-links active" : "nav-links"}>
            <li>
                {" "}
                <Link to="/header">Home</Link>{" "}
            </li>
            <li>
                {" "}
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
      </ul>
      <i className={open ? "fas fa-bars close" : "fas fa-bars open"} onClick={() => setOpen(true)}>
        <button className="btn">Show</button>
      </i>
      <i className={open ? "fas fa-times open" : "fas fa-times close"} onClick={() => setOpen(false)}>
      <button className="btn">Close</button></i>
    </nav>
  );
}
export default Navigation;

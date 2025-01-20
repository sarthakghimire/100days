import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Header = () => {
  const navLinkConfig = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Home",
      path: "/",
    },
  ];

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center bg-warning">
        <div className="logoBox">LOGO</div>
        <div className="linkBox">
          <ul className="list-unstyled my-auto d-flex gap-4 justify-content-between align-items-center">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
        <div className="contactBox">
          <div>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Header;

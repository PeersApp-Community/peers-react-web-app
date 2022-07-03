import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/photo_2022-06-11_15-53-30_1-removebg-preview.png";
import { Ulist, NavImg, Nav, Navbutton, NavLink } from "./styles/learnStyles";
import GlobalStyle from "./styles/GlobalStyle";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark border-bottom">
      <GlobalStyle />

      <NavImg>
        <img src={logo} alt=" " />
      </NavImg>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <NavLink class="collapse navbar-collapse" id="collapsibleNavbar">
        <Ulist width="50%" className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link text-light link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="testimonials" className="nav-link text-light link">
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="download" className="nav-link text-light link">
              Download
            </Link>
          </li>
        </Ulist>
        <Navbutton>
          <button type="button" class="btn btn-sm btn-dark px-4">
            {" "}
            Login
          </button>
          <button type="button" class="btn btn-sm btn-dark px-4 ">
            {" "}
            Sign Up
          </button>
        </Navbutton>
      </NavLink>
    </Nav>
  );
};

export default Navbar;

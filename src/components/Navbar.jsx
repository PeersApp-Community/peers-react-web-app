import React from "react";
import logo from "../Images/photo_2022-06-11_15-53-30_1-removebg-preview.png";
import { Ulist, NavImg, Nav, NavLink } from "./styles/learnStyles";
import GlobalStyle from "./styles/GlobalStyle";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

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

      <NavLink className="collapse navbar-collapse" id="collapsibleNavbar">
        <Ulist width="70%" className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link text-light link" target="_top">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link text-light link" target="_top">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#faqs" className="nav-link text-light link" target="_top">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#footer"
              className="nav-link text-light link"
              target="_top"
            >
              Contact
            </a>
          </li>
        </Ulist>

        <Ulist width="30%" className=" nav">
          <li className="nav-item">
            <a
              href="https://www.facebook.com/OfficialPeersApp/"
              className="nav-link text-light link"
              target="_blank "
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/_peersapp/"
              className="nav-link text-light link"
              target="_blank "
            >
              <FaInstagram />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/_peersapp?t=6ZRVLfAyYe5-PHXvuZubRQ&s=09"
              className="nav-link text-light link"
              target="_blank "
            >
              <FaTwitter />
            </a>
          </li>
        </Ulist>
        {/* <Navbutton>
            <button type="button" class="btn btn-sm btn-dark px-4"> Login</button> 
            <button type="button" class="btn btn-sm btn-dark px-4 "> Sign Up</button>
          </Navbutton> */}
      </NavLink>
    </Nav>
  );
};

export default Navbar;

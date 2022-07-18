import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/photo_2022-06-11_15-53-30_1-removebg-preview.png";
import { BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import { Ulist, NavImg, Nav, Navbutton, NavLink } from "./styles/learnStyles";
import GlobalStyle from "./styles/GlobalStyle";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark border-bottom w-100 py-3">
      {/* <GlobalStyle /> */}

      <NavImg>
        <img src={logo} alt=" " />
      </NavImg>



      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

    <NavLink className="collapse navbar-collapse w-100 justify-content-evenly " id="collapsibleNavbar">
      <ul className="navbar-nav d-grid-sm justify-content-evenly w-100">
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#faq">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#contact">Contact</a>
        </li>
      </ul>

      <Ulist  className="nav justify-content-center ">
          <li className="nav-item"><a class="nav-link text-light link" href="https://web.facebook.com/OfficialPeersApp/" target='_blank '><BsFacebook /></a></li>
          <li className="nav-item"><a class="nav-link text-light link" href="https://www.instagram.com/_peersapp/" target='_blank '><BsInstagram /></a></li>
          <li className="nav-item"><a class="nav-link text-light link" href="https://twitter.com/_peersapp" target='_blank '><BsTwitter /></a></li>
      </Ulist>
    </NavLink>

      {/* <NavLink class="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link text-light link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link text-light link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link text-light link">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link text-light link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <Link to="download" className="nav-link text-light link">
              Download
            </Link>
          </li> 
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item"><a class="nav-link text-light link" href="https://web.facebook.com/OfficialPeersApp/" target='_blank '><BsFacebook /></a></li>
          <li className="nav-item"><a class="nav-link text-light link" href="https://www.instagram.com/_peersapp/" target='_blank '><BsInstagram /></a></li>
          <li className="nav-item"><a class="nav-link text-light link" href="https://twitter.com/_peersapp" target='_blank '><BsTwitter /></a></li>
        </ul> */}

        {/* <Navbutton>
          <button type="button" class="btn btn-sm btn-dark px-4">
            {" "}
            Login
          </button>
          <button type="button" class="btn btn-sm btn-dark px-4 ">
            {" "}
            Sign Up
          </button>
        </Navbutton> */}
      {/* </NavLink> */}
    </Nav>
  );
};

export default Navbar;


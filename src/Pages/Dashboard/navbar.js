import React, { useState } from "react";
import "../../Styles/_navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import navLogo from "../../resources/logo-dcwd.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);

  const makeStickyOn = () => {
    if (window.scrollY >= 202) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", makeStickyOn);

  return (
    <nav
      className={
        navbar
          ? "navbar sticky navbar-expand-lg navbar_main"
          : "navbar navbar-expand-lg navbar_main"
      }
    >
      <div className="container-fluid navbar_wrapper">
      <img className={navbar ? "mobile-nav-icon nav-icon" : "hide-mobile-nav-icon nav-icon"} src={navLogo} style={{ width: "15%", marginRight: '-45.5%', marginLeft: '-5%' }}/>
        <a className="navbar-brand" style={{ color: "#fafafa" }} href="#">
          DCWD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <GiHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <img className="nav-icon" src={navLogo} style={navbar ? { display: "block" } : { display: 'none' }}/>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CSR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GAD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

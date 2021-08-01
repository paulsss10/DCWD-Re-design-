import React from "react";
import '../../Styles/_ribbon.scss';
import { SiIssuu } from 'react-icons/si';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';

const Ribbon = () => {
  return (
    <nav className="navbar ribbon">
      <div className="container-fluid navbar_wrapper">
        <div className="d-flex">
          <ImFacebook2 className="ribbon_icons" />
          <IoLogoYoutube className="ribbon_icons" />
          <SiIssuu className="ribbon_icons" />
        </div>
        
        <button type="button" className="btn">Login/Sign Up</button>
      </div>
    </nav>
  );
};

export default Ribbon;

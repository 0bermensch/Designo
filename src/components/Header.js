import React, { useState } from "react";
import logolight from "../asset/shared/desktop/logo-light.png";
import logodark from "../asset/shared/desktop/logo-dark.png";
import hamburger from "../asset/shared/mobile/icon-hamburger.svg";
import close from "../asset/shared/mobile/icon-close.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const toggle = () => setNavIcon(!navIcon);

  let hamburgerNav;

  if (openNavMenu) {
    hamburgerNav = (
      <ul className="header__hamburgernav">
        <li>
          <NavLink>OUR COMPANY</NavLink>
        </li>
        <li>
          <NavLink>LOCATIONS</NavLink>
        </li>
        <li>
          <NavLink>CONTACT</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div className="header">
      <NavLink>
        <img className="header__logo" src={logodark} />
      </NavLink>
      <div
        onClick={() => toggle(!navIcon)}
        onClick={() => setOpenNavMenu(!openNavMenu)}
      >
        <img />
      </div>
      {hamburgerNav}

      <ul className="header__nav">
        <li>
          <NavLink className="header__nav--item">OUR COMPANY</NavLink>
        </li>
        <li>
          <NavLink className="header__nav--item">lOCATIONS</NavLink>
        </li>
        <li>
          <NavLink className="header__nav--item">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

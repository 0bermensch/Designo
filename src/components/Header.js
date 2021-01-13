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
          <NavLink className="header__hamburgernav-item" to="/about">
            OUR COMPANY
          </NavLink>
        </li>
        <li>
          <NavLink className="header__hamburgernav-item" to="/locations">
            LOCATIONS
          </NavLink>
        </li>
        <li>
          <NavLink className="header__hamburgernav-item" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div className="header">
      <div className="header__content">
        <NavLink className="header__homelogo" to="/">
          <img className="header__logo" src={logodark} />
        </NavLink>
        <div
          onClick={() => toggle(!navIcon)}
          onClick={() => setOpenNavMenu(!openNavMenu)}
        >
          <img className="header__hamburger" src={hamburger} />
        </div>

        <ul className="header__nav">
          <li>
            <NavLink className="header__nav--item" to="/about">
              OUR COMPANY
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav--item" to="/locations">
              LOCATIONS
            </NavLink>
          </li>
          <li>
            <NavLink className="header__nav--item" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      {hamburgerNav}
    </div>
  );
};

export default Header;

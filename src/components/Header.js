import React, { useState } from "react";
import logolight from "../asset/shared/desktop/logo-light.png";
import logodark from "../asset/shared/desktop/logo-dark.png";
import hamburger from "../asset/shared/mobile/icon-hamburger.svg";
import close from "../asset/shared/mobile/icon-close.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logodark} />
      <ul className="header__nav">
        <li className="header__nav--item">OUR COMPANY</li>

        <li className="header__nav--item">lOCATIONS</li>

        <li className="header__nav--item">CONTACT</li>
      </ul>
    </div>
  );
};

export default Header;

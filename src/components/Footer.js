import React from "react";
import logolight from "../asset/shared/desktop/logo-light.png";
import fblogo from "../asset/shared/desktop/icon-facebook.svg";
import ytlogo from "../asset/shared/desktop/icon-youtube.svg";
import tlogo from "../asset/shared/desktop/icon-twitter.svg";
import plogo from "../asset/shared/desktop/icon-pinterest.svg";
import iglogo from "../asset/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="footertop__container">
          <div className="footertop__container--title">
            Let's talk about your project
          </div>
          <div className="footertop__container--context">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </div>
        </div>
        <div className="footertop__button">GET IN TOUCH</div>
      </div>
      <div className="footerbottom">
        <div className="footerbottom__topcontainer">
          <img
            className="footerbottom__topcontainer--logo"
            src={logolight}
            alt="logo"
          />
          <ul className="footerbottom__topcontainer--nav">
            <li className="footerbottom__topcontainer--nav">OUR COMPANY</li>
            <li className="footerbottom__topcontainer--nav">LOCATIONS</li>
            <li className="footerbottom__topcontainer--nav">CONTACT</li>
          </ul>
        </div>
        <div className="footerbottom__bottomcontainer">
          <div className="footerbottom__bottomcontainer--section1">
            <div>Designo Central Office</div>
            <div>3886 Wellington Street</div>
            <div>Toronto, Ontario M9C 3J5</div>
          </div>
          <div className="footerbottom__bottomcontainer--section2">
            <div>Contact Us (Central Office)</div>
            <div>P: +1 253-863-8967</div>
            <div>M: contact@designo.co</div>
          </div>
          <div className="footerbottom__bottomcontainer--social">
            <img
              className="footerbottom__bottomcontainer--sociallogo"
              src={fblogo}
              alt=""
            />
            <img
              className="footerbottom__bottomcontainer--sociallogo"
              src={ytlogo}
              alt=""
            />
            <img
              className="footerbottom__bottomcontainer--sociallogo"
              src={tlogo}
              alt=""
            />
            <img
              className="footerbottom__bottomcontainer--sociallogo"
              src={plogo}
              alt=""
            />
            <img
              className="footerbottom__bottomcontainer--sociallogo"
              src={iglogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

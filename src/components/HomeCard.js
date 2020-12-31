import React from "react";
import homehero from "../asset/home/desktop/image-hero-phone.png";

const HomeCard = () => {
  return (
    <div className="homecard">
      <div className="homecard__container">
        <div className="homecard__title">
          Award-winning custom designs and digital branding solutions
        </div>
        <div className="homecard__context">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </div>
        <button>LEARN MORE</button>
      </div>
      <img className="homecard__hero" src={homehero} />
    </div>
  );
};

export default HomeCard;

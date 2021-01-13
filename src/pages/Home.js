import React, { useState } from "react";
import HomeCard from "../components/HomeCard";
import DesignCard from "../components/DesignCard";
import DwebL from "../asset/home/desktop/image-web-design-large.jpg";
import DwebS from "../asset/home/desktop/image-web-design-small.jpg";
import Dapp from "../asset/home/desktop/image-app-design.jpg";
import Dgra from "../asset/home/desktop/image-graphic-design.jpg";
import Tweb from "../asset/home/tablet/image-web-design.jpg";
import Tapp from "../asset/home/tablet/image-app-design.jpg";
import Tgra from "../asset/home/tablet/image-graphic-design.jpg";
import Mweb from "../asset/home/mobile/image-web-design.jpg";
import Mapp from "../asset/home/mobile/image-app-design.jpg";
import Mgra from "../asset/home/mobile/image-graphic-design.jpg";
import homehero from "../asset/home/desktop/image-hero-phone.png";
import homepic1 from "../asset/home/desktop/illustration-passionate.svg";
import homepic2 from "../asset/home/desktop/illustration-resourceful.svg";
import homepic3 from "../asset/home/desktop/illustration-friendly.svg";
import backgroundcircle from "../asset/home/desktop/bg-pattern-hero-home.svg";

const Home = () => {
  const [homeContent] = useState([
    {
      img: homepic1,
      title: "PASSIONATE",
      context:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      img: homepic2,
      title: "RESOURCEFUL",
      context:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      img: homepic3,
      title: "FRIENDLY",
      context:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ]);

  return (
    <div className="home">
      <HomeCard />
      <div className="home__design">
        <div className="home__design--mobile">
          <DesignCard title="WEB DESIGN" image={Mweb} />
          <DesignCard title="APP DESIGN" image={Mapp} />
          <DesignCard title="GRAPHIC DESIGN" image={Mgra} />
        </div>
        <div className="home__design--tablet">
          <DesignCard title="WEB DESIGN" image={Tweb} />
          <DesignCard title="APP DESIGN" image={Tapp} />
          <DesignCard title="GRAPHIC DESIGN" image={Tgra} />
        </div>
        <div className="home__design--desktop">
          <DesignCard title="WEB DESIGN" image={DwebL} />
          <div className="home__design--desktopcontainer">
            <DesignCard title="APP DESIGN" image={Dapp} />
            <DesignCard title="GRAPHIC DESIGN" image={Dgra} />
          </div>
        </div>
      </div>

      {/* {homeContent.map(
        <div className="home__content">
          <img className="home__content--img" src={img} />
          <div className="home__content--container">
            <div className="home__content--title">{title}</div>
            <div className="home__content--context">{context}</div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Home;

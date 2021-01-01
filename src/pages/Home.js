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

const [designimages] = useState([
  { title: "WEB DESIGN", Mimg: Mweb, Timg: Tweb, Dimg },
]);

const Home = () => {
  return (
    <div className="home">
      <HomeCard />
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
  );
};

export default Home;

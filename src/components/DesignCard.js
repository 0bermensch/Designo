import React from "react";
import arrow from "../asset/shared/desktop/icon-right-arrow.svg";

const DesignCard = (props) => {
  return (
    <div className="designcard" style={{ backgroundImage: props.image }}>
      <div>{props.title}</div>
      <div>VIEW PROJECT</div>
      <img src={arrow} />
    </div>
  );
};

export default DesignCard;

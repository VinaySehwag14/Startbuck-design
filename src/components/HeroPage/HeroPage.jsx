import React from "react";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div className="HeroPage">
      <div className="HeroPage__imageContainer">
        <img
          className="HeroPage__image"
          src="https://www.paldesk.com/wp-content/uploads/2021/03/starbucks-reward-membership.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroPage;

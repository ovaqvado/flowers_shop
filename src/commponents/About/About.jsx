import React from "react";
import Style from "./About.module.css";
import Search from "../../img/searchInput.svg";

const About = () => {
  return (
    <div className={Style.box}>
      <div className={Style.search_bar}>
        <input type="text" placeholder="Search..." />
        <img src={Search} alt="Search icon" />
      </div>
    </div>
  );
};
export default About;

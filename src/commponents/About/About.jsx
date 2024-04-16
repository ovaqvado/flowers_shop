import React from "react";
import Style from "./About.module.css";
import Search from "../../img/searchInput.svg";

const About = () => {
  return (
    <div className={Style.box}>
      <img src={Search} alt="Search icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};
export default About;

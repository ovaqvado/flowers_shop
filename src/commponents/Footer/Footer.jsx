import React from "react";
import Style from "./Footer.module.css";
import logo from "../../img/logo_img.svg";

function Footer() {
  return (
    <div className={Style.container_footer}>
      <h1 className={Style.title_footer}> С любовью </h1>
      <div className={Style.box_logo}>
        <img className={Style.logo_img} src={logo} alt="Logo" />
        <div className={Style.title_text_logo}>Get flowers</div>
      </div>
    </div>
  );
}

export default Footer;

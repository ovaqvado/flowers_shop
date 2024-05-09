import React from "react";
import Style from "./Footer.module.css";
import telegram from "./image/telegram.svg";
import instagram from "./image/instagram.svg";
import vk from "./image/vk.svg";
import whatsapp from "./image/whatsapp.svg";
import logo_footer from "./image/logo_footer.svg";

function Footer() {
  return (
    <div className={Style.container_footer}>
      <div className={Style.footer_box}>
        <div className={Style.title_box}>
          <img
            className={Style.logo_footer}
            src={logo_footer}
            alt="logo_footer"
          />
          <div className={Style.group_links}>
            <a href="">
              <img className={Style.soc_links} src={vk} alt="vk" />
            </a>
            <a href="">
              <img
                className={Style.soc_links}
                src={instagram}
                alt="instagram"
              />
            </a>
            <a href="">
              <img className={Style.soc_links} src={whatsapp} alt="whatsapp" />
            </a>
            <a href="">
              <img className={Style.soc_links} src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
        <div className={Style}></div>
        <div className={Style}></div>
      </div>
      <hr />
      <div className={Style}></div>
    </div>
  );
}

export default Footer;

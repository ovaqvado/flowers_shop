import React from "react";
import Style from "./Maps.module.scss";
import Contacts from "../Contacts/Contacts";
function GoogleMap() {
  return (
    <div id="section2" className={Style.container_map}>
      <Contacts className={Style.Contacts} />
      <iframe
        title="maps_location"
        className={Style.GoogleMap}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.39046539053516!2d39.7262124984982!3d43.59148761731336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cb8927c0165f%3A0xae8f14b0005f9ecd!2sMoreflowers!5e1!3m2!1sru!2sru!4v1719572366798!5m2!1sru!2sru"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.39046539053516!2d39.7262124984982!3d43.59148761731336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cb8927c0165f%3A0xae8f14b0005f9ecd!2sMoreflowers!5e1!3m2!1sru!2sru!4v1719572366798!5m2!1sru!2sru" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}

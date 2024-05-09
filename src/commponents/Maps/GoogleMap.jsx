import React from "react";
import Style from "./Maps.module.css";
import Contacts from "../Contacts/Contacts";
function GoogleMap() {
  return (
    <div className={Style.container_map}>
      <Contacts className={Style.Contacts} />
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=russia,%20sochi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

// useEffect(() => {
//   const map = new window.google.maps.Map(document.getElementById("map"), {
//     center: { lat: 45.03397526204213, lng: 38.91484237555835 },
//     zoom: 12,
//   });
// }, []);

// return <div id="map" style={{ width: "600px", height: "450px" }}></div>;

import React from "react";
import Style from "./Maps.module.css";
import Contacts from "../Contacts/Contacts";
function GoogleMap() {
  return (
    <div className={Style.container_map}>
      <Contacts className={Style.Contacts} />
      <iframe
        className={Style.GoogleMap}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.9352737558406!2d38.96671831744385!3d45.0262394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fbaea47ba23%3A0x3715a2bd505cfa6c!2z0JzQsNCz0LDQt9C40L0g0KbQstC10YLQvtCyINCb0J7Qm9CY!5e0!3m2!1sru!2sru!4v1712592397398!5m2!1sru!2sru"
        title="maps"
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

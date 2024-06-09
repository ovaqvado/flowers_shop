import React, { useEffect } from "react";
import Style from "./Reviews.module.scss";

const ElfSightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className={Style.google_reviews} data-elfsight-app-lazy></div>;
};

export default ElfSightWidget;

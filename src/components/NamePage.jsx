import React from "react";
import "./styles/namePageStyle.css";
import Typical from "react-typical";

function NamePage() {
  return (
    <div className="NamePage" id="name-page">
      {/* <span className="NamePage-header">RAFFAY RANA</span> */}
      {/* <span className="NamePage-subheader"> Welcome!</span> */}
      <Typical
        steps={["Hi! 👋", 2100, "Glad you're here! :)", 2100]}
        loop={Infinity}
        wrapper="p"
        className="NamePage-header"
      />
    </div>
  );
}

export default NamePage;

import React from "react";
import avatar from "../assets/images/avatar.jpg";
import pk from "../assets/images/Social/logo.png";

const AvatarBox = ({ handleShowContact, isContact }) => {
  return (
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img src={avatar} alt="Pradeep Kumar" width="80" />
      </figure>
      <div className="info-content">
        <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"14px"}}>
          <img
            src={pk}
            alt="logo"
            style={{ width: "32px", borderRadius: "4px", display: "inline" }}
          />
          <h1 className="name" title="Pradeep Kumar">
            Pradeep Kumar
          </h1>
        </div>
        <span className="title">Software Engineer</span>
      </div>
      <button
        className="info_more-btn"
        data-sidebar-btn
        onClick={() => {
          handleShowContact(!isContact);
        }}
      >
        <span>Show Contact</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
  );
};

export default AvatarBox;

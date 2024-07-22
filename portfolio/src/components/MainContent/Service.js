import React from "react";
import { services } from "../../contants";

const Service = () => {
  return (
    <section className="service">
      <h3 className="h2 article-title service-title">What I Do</h3>
      <ul className="service-list">
        {services.map((item) => (
          <li className="service-item">
            <div className="service-icon-box">
              <img src={item.icon} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{item.name}</h4>
              <p className="service-item-text">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Service;

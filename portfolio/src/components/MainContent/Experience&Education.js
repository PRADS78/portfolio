import React from "react";
import { resumeData } from "../../contants";

const ExperienceAndEducation = () => {
  return (
    <>
      {resumeData.map((item) => {
        return (
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h3 className="h3">{item.name}</h3>
            </div>
            {item.list.map((l) => {
              return (
                <ol className="timeline-list">
                  <li className="timeline-item">
                    {l?.role && <h3 className="h3">{l.role}</h3>}
                    <h4 className="h4 timeline-item-title">{l.company}</h4>
                    <span>{l.span}</span>
                    <p className="timeline-text">{l.desc}</p>
                  </li>
                </ol>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default ExperienceAndEducation;

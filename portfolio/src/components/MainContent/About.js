import React from "react";
import Service from "./Service";
import {aboutButtons} from "../../contants";

const About = ({ handleActivePage }) => {
  const handleButton = (item) => {
    if(item.id==1){
      handleActivePage(item.to);
    }else{
      window.open(item.to, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <>
      {/* #ABOUT */}
      <article className="about active overflow-ctr" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            As a skilled Software Engineer specializing in full-stack
            development, I am committed to delivering outstanding user
            experiences and crafting scalable, impactful technological
            solutions. My passion for exploring new technologies drives me to
            tackle real-world challenges with innovative approaches. I excel in
            web development, problem-solving, communication, and collaboration.
            Constantly seeking opportunities for growth, I am dedicated to
            advancing both my development skills and knowledge.
          </p>
        </section>
        <Service />
        <div className="about-buttons">
          {aboutButtons.map((item) => {
            return (
              <button
                className="check-btn download-resume"
                onClick={() => handleButton(item)}
              >
                <span>{item.text}</span>
                <img src={item.icon} />
              </button>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default About;

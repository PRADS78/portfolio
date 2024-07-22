import React from "react";
import { Tilt } from "react-tilt";
import { projectsData } from "../../contants";

const Projects = () => {
  return (
    <article className="portfolio active overflow-ctr" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section>
        <ul className="project-list">
          {projectsData.map((project) => (
            <Tilt>
              <li
                key={project.id}
                className="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href={project.link}  target="_blank" rel="noopener noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="logo-github"></ion-icon>
                    </div>
                    <img
                      src={project.imgSrc}
                      alt={project.imgAlt}
                      loading="lazy"
                    />
                  </figure>
                  <h2 className="h2 project-title">{project.title}</h2>
                  {/* <span className="project-category">{project.category}</span>                   */}
                  <p className="project-category">{project.desc}</p>
                </a>
              </li>
            </Tilt>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;

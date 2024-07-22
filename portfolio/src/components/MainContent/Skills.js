import React from "react";
import ExperienceAndEducation from "./Experience&Education";
import styled from "styled-components";
import { skillList } from "../../contants";
import { Tilt } from "react-tilt";

const SkillList = styled.div`
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  row-gap: 20px;
  background: var(--border-gradient-onyx);
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  padding-top: 30px;
  padding: 20px;
  position: relative;
  z-index: 1;
  
  &:before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #f2f3f4;
  border: 1px solid #f2f3f4;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;
const Skills = () => {
  return (
    <article className="resume active overflow-ctr" data-page="resume">
      <div>
        <header>
          <h1 className="h2 article-title">Skills</h1>
        </header>
        <section>
          {
            <SkillList>
              {skillList.map((item, index_x) => (
                <Tilt>
                  <SkillItem key={`skill-x-${index_x}`}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                </Tilt>
              ))}
            </SkillList>
          }
        </section>
      </div>
      <br />
      <br />
      <div>
        <ExperienceAndEducation />
      </div>
    </article>
  );
};

export default Skills;

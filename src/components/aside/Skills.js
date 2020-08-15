import React from "react";

const Skills = ({ skills }) => {
  return (
    <section className="skills">
      <h1 className="aside__defaultTitle">Skills</h1>
      {skills.map((skill) => {
        const { name, value } = skill;
        return (
          <div key={name}>
            <p>{name}</p>
            <div className="skills__bar">
              <div style={{ width: `${value}` }}></div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;

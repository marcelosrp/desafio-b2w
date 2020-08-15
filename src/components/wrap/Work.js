import React from "react";

const Work = ({ experiences }) => {
  return (
    <section className="work">
      <h1 className="wrap-content__titleDefault">work experience</h1>

      {experiences.map((experience) => {
        const { name, date, description } = experience;
        return (
          <div key={name} className="work__item content-item">
            <h2>{name}</h2>
            <span>{date}</span>
            <p>{description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Work;

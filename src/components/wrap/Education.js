import React from "react";

const Education = ({ educations }) => {
  return (
    <section className="education">
      <h1 className="wrap-content__titleDefault">education</h1>

      {educations.map((education) => {
        const { name, date, description } = education;
        return (
          <div key={name} className="education__item content-item">
            <h2>{name}</h2>
            <span>{date}</span>
            <p>{description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Education;

import React from "react";

const Name = ({ name, profession }) => (
  <section className="name">
    <h1 className="name__title">{name}</h1>
    <h2 className="name__subTitle">{profession}</h2>
  </section>
);

export default Name;

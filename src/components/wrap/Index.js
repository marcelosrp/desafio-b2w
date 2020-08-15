import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStorage";

import Work from './Work';
import Education from './Education';

import "./style.scss";

const Wrap = () => {
  const { data } = useContext(GlobalContext);

  if (!data) return null;

  return (
    <section className="wrap-content">
      <Work experiences={data.experience} />
      <Education educations={data.education} />
    </section>
  );
};

export default Wrap;

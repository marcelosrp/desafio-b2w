import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStorage";

import Avatar from "./Avatar";
import Name from "./Name";
import Profile from "./Profile";
import Contact from "./Contact";
import Skills from "./Skills";

import './style.scss';

const Aside = () => {
  const { data } = useContext(GlobalContext);

  if (!data) return null;

  return (
    <aside className="aside">
      <Avatar />
      <Name name={data.name} profession={data.profession} />
      <Profile profile={data.description} />
      <Contact contact={data.contact} />
      <Skills skills={data.skills} />
    </aside>
  );
};

export default Aside;

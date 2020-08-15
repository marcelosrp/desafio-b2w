import React from "react";

const Contact = ({ contact }) => (
    <section className="contact">
      <h1 className="aside__defaultTitle">Contact</h1>
      <p className="aside__defaultText">{contact.tel}</p>
      <p className="aside__defaultText">{contact.cel}</p>
      <br />
      <br />
      <p className="aside__defaultText">{contact.address}</p>
      <br />
      <br />
      <p className="aside__defaultText">
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`http://${contact.website}`}
        >
          {contact.website}
        </a>
      </p>
      <p className="aside__defaultText">
        <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
      </p>
    </section>
);

export default Contact;

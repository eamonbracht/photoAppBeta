import * as React from "react";
import { Link } from "react-router-dom";

function Info() {
  return <div>Hi, Email me</div>;
}

function ContactMeLink() {
  return (
    <Link to="/contact">
      <button theme="blue">Send</button>
    </Link>
  );
}

export default function ContactMe() {
  return (
    <section>
      <h1>Contact Me </h1>
      <Info />
      <ContactMeLink />
    </section>
  );
}

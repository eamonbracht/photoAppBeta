import * as React from "react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div>
      Hello! My name is [Your Name], and I am a passionate photographer with
      over [X years] of experience in capturing life's most precious moments.
      Photography for me is not just a profession, but a medium through which I
      express my creativity, connect with people, and tell their unique stories.
      I specialize in [mention your areas of specialization, e.g., wedding
      photography, portrait photography, nature photography, etc.], bringing a
      fresh and innovative approach to each session. My style is a blend of
      candid and posed photography, ensuring that every emotion, detail, and
      moment is captured beautifully and authentically. My journey in
      photography began when [a brief story about how you got started], and
      since then, I've been constantly learning and evolving in my craft. I
      believe that every photograph tells a story, and my goal is to create
      images that are not just seen but felt, evoking emotions and memories that
      last a lifetime. I am equipped with state-of-the-art camera gear and have
      a keen eye for lighting, composition, and detail. Whether it's a wedding,
      family gathering, or a solo portrait session, I strive to create a
      comfortable and enjoyable experience for my clients, ensuring that their
      true essence is captured in every shot. When I'm not behind the lens, you
      can find me exploring new places, experimenting with different photography
      techniques, or spending quality time with my family and friends. I am
      based in [Your Location], but I am available for travel worldwide to
      capture your story, wherever it may be. Let's connect and create something
      beautiful together!
    </div>
  );
}

function ContactMe() {
  return (
    <Link to="/contact">
      <button theme="blue">Contact Me</button>
    </Link>
  );
}

export default function AboutMe() {
  return (
    <section>
      <h1>About Me </h1>
      <Info />
      <ContactMe />
    </section>
  );
}

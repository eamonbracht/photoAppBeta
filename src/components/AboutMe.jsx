import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img
        src="SourceImages/KevinHeadShot.jpg"
        alt="Your Portrait"
        className="portrait"
      />
    </header>
  );
}

function Story() {
  return (
    <section className="story">
      <h2>About Me</h2>
      <p>
        Hi! My name is <strong>Kevin Leahy</strong>, and I am a passionate
        photographer with over 15 years of experience in capturing life's most
        precious moments. Photography for me is not just a profession, but a
        medium through which Is express my creativity, connect with people, and
        tell their unique stories. My style is a blend of candid and posed
        photography, ensuring that every emotion, detail, and moment is captured
        beautifully and authentically. My journey in photography began when I
        stole my mothers camera knowing that if I had it she couldn't make me
        stop for a photo, and since then, I've been constantly learning and
        evolving in my craft. I believe that every photograph tells a story, and
        my goal is to create images that are not just seen but felt, evoking
        emotions and memories that last a lifetime. I am equipped with
        state-of-the-art camera gear and have a keen eye for lighting,
        composition, and detail. Whether it's a{" "}
        <strong>wedding, live event, or a product photo shoot</strong>, I strive
        to create a comfortable and enjoyable experience for my clients,
        ensuring that their true essence is captured in every shot. When I'm not
        behind the lens, you can find me exploring new places, experimenting
        with different photography techniques, or spending quality time with my
        family and friends. I am <strong>based in Chicago</strong>, but I am
        available for travel worldwide to capture your story, wherever it may
        be. Let's connect and create something beautiful together!
      </p>
    </section>
  );
}

function PortfolioSamples() {
  return (
    <section className="portfolio">
      <h2>My Work</h2>
      {/* THESE IMAGES ARE PLACE HOLDERS ALSO WTF IS UP WITH SCROLLING */}
      <img src="SourceImages/KevinHeadShot.jpg" alt="Your Portrait" />
      <img src="SourceImages/KevinHeadShot.jpg" alt="Your Portrait" />
      <img src="SourceImages/KevinHeadShot.jpg" alt="Your Portrait" />
    </section>
  );
}

function ContactMeLink() {
  return (
    <div className="contact-link">
      <Link to="/contact">
        <button className="contact-button">Let's Capture Your Story</button>
      </Link>
    </div>
  );
}

export default function AboutMe() {
  return (
    <main className="about-me">
      <Header />
      <Story />
      <ContactMeLink />
      <PortfolioSamples />
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <Link to="/" className="about-title">
        ŸEND
      </Link>

      <div className="about-content">
        <h1 className="bio-title">BIOGRAPHY ŸEND</h1>

        <p>
          If we are all a product of our environment, creating allows Ÿend to
          control all of its parameters. Growing up in a guilt-driven
          environment, Ÿend turned every offense into a strength, shaping her
          music to be powerful and audacious.
        </p>

        <p>
          Of Algerian and Guadeloupean origin, she blends her heritage of
          Afro-diasporic with the hip hop and house culture she embraced during
          her youth in Mulhouse. This fusion took shape in her 2023 EP{" "}
          <a
            href="https://fanlink.tv/yekrik"
            target="_blank"
            rel="noopener noreferrer"
          >
            YEKRIK
          </a>
        </p>

        <p>
          In 2025, she releases{" "}
          <a
            href="https://baco.lnk.to/SingleBARBES"
            target="_blank"
            rel="noopener noreferrer"
          >
            barbès
          </a>
          and
          <a
            href="https://baco.lnk.to/attention"
            target="_blank"
            rel="noopener noreferrer"
          >
            attention,
          </a>
          hinting at the arrival of an EP in early 2026.
        </p>

        <a
          href="https://ln.ki/yend?fbclid=PAZXh0bgNhZW0CMTEAAaYOd2tZS0DVq5rj3jleo4WAf6BZuBlftyayssz0HcwPwPfw2fB3Pm19MMI_aem_qTVEtwVkbH-hsgK2nFp0Tw"
          target="_blank"
          rel="noopener noreferrer"
          className="stream"
        >
          STREAM HERE
        </a>
      </div>
    </div>
  );
}

export default AboutMe;

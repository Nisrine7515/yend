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
        <h1 className="bio-title">BIOGRAPHY</h1>

        <p>
          Born in Mulhouse, ŸEND grew up between Alsace and Guadeloupe and
          developed a strong passion for theatre from an early age, beginning
          her training at nine years old.
        </p>

        <p>
          Since 2020, she has released 18 tracks in which diasporic memories and
          emotional wounds are rendered through a narrative thread that aspires
          to be cinematic. This is evident in her singles 'barbès' and more
          recently 'noire' (playlisted under "Lyricistes" by Spotify).
        </p>
        <p>
          Her powerful connection to live performance earned her the Buzz
          Booster Grand-Est 2024 and Rappeuses en Liberté 2024 awards. Ÿend has
          performed over 55 dates across Europe, including MaMA, MIL Festival,
          Les Ardentes and Europavox, as well as opening slots for Aupinard,
          Chilla and Jay Prince.{" "}
        </p>
        <p>
          In 2025, she collaborated on La Haine with Angolan composer NegoO as
          part of the collection Moonshine SMS Vol. 6.5.{" "}
        </p>
        <p>
          With 'la dame du fond', her new EP, she opens her first narrative
          cycle: nine tracks offering an alchemical journey that lays the
          foundations of a francophone BLK ODYSSEY. A screenwriter for Bandi
          (Netflix), she is also developing casa nyelë, a structure conceived as
          a home for clarity, creation and event production.
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

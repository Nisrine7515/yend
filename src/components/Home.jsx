import "../assets/styles/Home.css";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="top-left">
        <div>
          <Link to="/" className="title">
            ŸEND
          </Link>
        </div>
        <Link to="/about" className="subtitle">
          ABOUT ME
        </Link>
      </div>

      <div className="top-right">
        <a
          href="https://open.spotify.com/intl-fr/artist/1ETAICxy3MJuIEmS8YWL4s?si=RLVG-_svRhytR0cyM8bNiw"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPOTIFY
        </a>

        <a
          href="https://music.apple.com/fr/artist/yend/1532662538"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLE MUSIC
        </a>

        <a
          href="https://www.deezer.com/en/artist/107726312"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEEZER
        </a>

        <a
          href="https://www.youtube.com/@yendigba"
          target="_blank"
          rel="noopener noreferrer"
        >
          YOUTUBE
        </a>
      </div>

      <div className="bottom-left">
        <a
          href="https://yendigba.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP
        </a>
      </div>

      <div className="bottom-right">
        <a href="mailto:home@casanyele.com">CONTACT</a>

        <a
          href="https://www.instagram.com/yendigba"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>

        <a
          href="https://www.tiktok.com/@yendigba"
          target="_blank"
          rel="noopener noreferrer"
        >
          TIKTOK
        </a>
      </div>
    </div>
  );
}

export default Home;

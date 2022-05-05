import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      {/* <h2 className="project__header">Projects</h2> */}
      <div className="project__main">
        <img
          className="project__image"
          src="/images/flavour_flow_image_large.png"
          srcset="\images\weather.png 750w, \images\weather.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
        <h3 className="project__title">Weather Forecast App</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Weather Forecast</span> project
            created as an assignment during the bootcamp. Allows users to{" "}
            <span className="project__specialText">view weather forecast</span> based on {" "}
            <span className="project__specialText">location</span>. It uses the API to get weather Forecast
            and shows the upcoming weather for the next 7 days. {" "}
            
          </p>
          <p className="project__tech project__body" style={{color:"blue", fontWeight:"600"}}>
            &gt; Javascript · Bootstrap · CSS · HTML · API
          </p>

          <a
            className="project__sourceCode"
            href="https://github.com/SumanVastrakar/Weather-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://admiring-curie-322f25.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            {/* <FaGithub className="project__githubLogo" size={25} /> */}
            <h3 className="project__sourceCodeText">View Demo</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;

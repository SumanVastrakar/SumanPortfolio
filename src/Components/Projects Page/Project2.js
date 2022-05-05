import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Dress Div
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Creating a</span> fashion
            
             <span className="project__specialText">Created as an assignment</span>{" "}
            includes fashion designing, alteration and home delivery services and you can buy products here.{"\n"}
            It was one of my assignment and I completed this in one day.
          </p>
          <p className="project__tech project__body" style={{color:"blue", fontWeight:"600"}}>
            &gt;· React · Bootstrap · CSS
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/SumanVastrakar/ReactRouterFinal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://react-router-final.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            {/* <FaGithub className="project__githubLogo" size={25} /> */}
            <h3 className="project__sourceCodeText">View Demo</h3>
          </a>
         
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/covid_bot_project_image_large.jpg"
          srcset="\images\screenshotDressDiv.png 750w, \images\screenshotDressDiv.png 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;

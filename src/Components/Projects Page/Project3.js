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
          srcset="\images\BobbiBrownScreenShot.png 750w, \images\BobbiBrownScreenShot.png 1468w"
          // public\images\BobbiBrownScreenShot.png
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
        <h3 className="project__title">Bobbi Brown</h3>
          <p className="project__description project__body">
            is a <span className="project__specialText"> global premium beauty brand that empowers
           women to embrace and enhance their individual beauty.</span>The website of
            bobbi-brown provides all the beauty products that are offered by the company.
{" "}
            <span className="project__specialText">This was a collaborative project of six member to create a clone
 of bobbi-brown website.</span> {" "}
            <span className="project__specialText">This Project was made as a part of construct week curriculum of MASAI School.</span>
            
          </p>
          <p className="project__tech project__body" style={{color:"blue", fontWeight:"600"}}>
            &gt;· React · CSS · JavaScript · Bootstrap · MongoDB · ExpressJs · Nodejs
      
          </p>

          <a
            className="project__sourceCode"
            href="https://github.com/imkeshav98/bobbibrown"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://bobbibrown.vercel.app/"
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

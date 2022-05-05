import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import "./ProjectLight.css";
import "../NavBar/ResumeButton.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
          <h2 className="project__header">Projects</h2>
      <div className="project__main">
        {/* <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        /> */}
        {isDesktopOrLaptop ? (
          <>
            {/* <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            /> */}
            <img
              className="project__image"
              src="https://user-images.githubusercontent.com/91020498/165447490-9303e5f5-4087-476e-9d55-ff9d9fab6a9f.png"
              alt="Health Fusion Project Add Page"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Apple Tv</h3>
          <p className="project__description project__body">
             <span className="project__specialText">Apple TV is a streaming media</span> built for
            entertainment purpose. Allows users to{" "}
            <span className="project__specialText">
            stream apps (such as Netflix, Hulu, HBO Max and Disney Plus) so that 
            </span>
           {" "}
            <span className="project__specialText">you can watch your favorite shows and movies.</span>{" "}
            <br/>
            <span className="project__specialText"></span>
           {" "}
            <span className="project__specialText"></span>
            This is a collaborative project, done by 5 team members and completed in 5 days.
          </p>
          <p className="project__tech project__body" style={{color:"blue", fontWeight:"600"}}>
            &gt; HTML · CSS · Bootstrap · POST API ·MongoDb · Mongoose  · Express 
       
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/SumanVastrakar/AppleTv-_Fullstack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://chic-marigold-63d7ee.netlify.app/"
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

export default Project1;

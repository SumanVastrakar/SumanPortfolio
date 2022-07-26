import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            My Quiz App
          </h3>
          <p className="project__description project__body">
            <span className="project__specialText">Created a</span> Quiz App
            
             <span className="project__specialText">as an assignment</span>{"   "}
            includes JWT Authentication and Authorization
,Admin access and can add questions, Different categories of quizzes, Having documentation to go through,{"\n"}
Each user will get random 10 questions, Once clicked on the option further you can’t select any option,
After selecting option you can see explanation, At the end of the quiz you can see your score.

           
          </p>
          <p className="project__tech project__body" style={{color:"blue", fontWeight:"600"}}>
            &gt;· React · CSS · JavaScript · Bootstrap · MongoDB · ExpressJs · Nodejs
      
          </p>
  
          <a
            className="project__sourceCodeDark"
            href="https://github.com/SumanVastrakar/MyQuizApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://my-quiz-app-black.vercel.app/"
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
          src="/images\quizAppScreenshot.png"
          srcset="\images\quizAppScreenshot.png 750w, \images\quizAppScreenshot.png 1468w"
          // public\images\quizAppScreenshot.png
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

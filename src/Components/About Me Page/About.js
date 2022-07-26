import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
//
  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <br>
        </br>

        <p className="about__body">
          Hello! My name is Suman Vastrakar and I am a Bootcamp graduate from
         {" "}
          <span className="about__specialText"> Masai Shool Bangaluru</span>{" "}
          Currently, I am very interested in{" "}
          <span className="about__specialText">Front-end Development</span>,
         I am able to create responsive websites using   
        <span className="about__specialText">
              React </span> and <span className="about__specialText">  Bootstrap Library</span>{"\n"}
              I also like to dip my toes in Backend development using Node.js and ExpressJs. I use mongoDb which is a 
              noSQL database, for my database needs. I have sound knowledge of creating REST APIs using the above mentioned technogies.

        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
<br>
</br>
<br>
</br>
<br>
</br>
<h2 className="about__heading">My Skills</h2>
<br>
</br>
  
      <div className="techstackMarginBox techStackTool">
        <a href = "https://www.w3schools.com/css/" target="_blank">
        <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      
      />
        </a>
        <a href="https://html.com/" target="_blank"> 
        <img
        className=" techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
 
        </a>
     
         <a href="https://www.w3.org/html/" target="_blank"> 
         <img
        className=" techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
        <a href="https://reactjs.org/" target="_blank"> 
         <img
        className=" techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
      <a href="https://nodejs.org/en/" target="_blank"> 
         <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
      <a href="https://expressjs.com/" target="_blank"> 
         <img
        className="techstackMargin"
        src="https://images.tute.io/tute/topic/express-js.png"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
      <a href="https://www.mongodb.com/" target="_blank"> 
        <img
        className=" techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
      <a href="https://www.postman.com/" target="_blank"> 
       <img
        className=" techstackMargin"
        src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
      <a href="https://getbootstrap.com/" target="_blank"> 
             <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </a>
  
        </div>
      </div>
      <img
        className="about__headshot techstackMargin"
        srcset="\images\SumanVastrakar.jpg 150w, \images\SumanVastrakar.jpg 468w"
        // public\images\SumanVastrakar.jpg
        alt="human"
        width="300"
        height="300"
      />
      <LightWave />
    
     
    </section>
  );
}

export default About;

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

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello! My name is Suman Vastrakar and I am a Full Stack Web Developer
         {" "}
          <span className="about__specialText"></span>{" "}
          Currently, I am very interested in{" "}
          <span className="about__specialText">Front-end Development</span>,
          creating APIs, and working with databases. As well, I am extremely
          interested in Data Science, more specifically <span className="about__specialText">Artificial
          Intelligence</span> and <span className="about__specialText">Machine Learning.</span>
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGFLEeuN_2EAA/profile-displayphoto-shrink_800_800/0/1647781088738?e=1656547200&v=beta&t=cZ8ZJIJKr3I-4cuABawwrhaK4i7Aj42Jg1vOYigiNs0"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;

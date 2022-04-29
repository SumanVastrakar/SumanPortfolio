import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Currently I am looking for a Software Development
         
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: jparsons@ualberta.ca">
            <span className="contact__text">suman1vastrakar@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/suman-vastrakar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">Suman Vastrakar</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;

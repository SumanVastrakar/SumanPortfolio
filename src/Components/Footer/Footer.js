import Logo from "../NavBar/Logo";
import "./Footer.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SourceCodeLink from "./SourceCodeLink";

function Footer() {
  return (
    <footer className="footer">
      <SocialMediaIcons />
      <Logo />
      <p className="footer__copyright">Copyright © 2022 Suman Vastrakar.</p>
      {/* <SourceCodeLink /> */}
    </footer>
  );
}

export default Footer;

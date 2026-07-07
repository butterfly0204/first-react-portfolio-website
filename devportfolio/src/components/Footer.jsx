import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
   <footer>
    <a href="#"className="footer_logo">THEFAVOURMOGAJI</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  {/* will add icon later... currently not connected to the internet */}
    <div className="footer_socials">
      <a href="instagram"><FaInstagram /></a>
      <a href="linkedin"><FaLinkedinIn /></a>
      <a href="twitter"><BsTwitterX /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; THEFAVOURMOGAJI. ALL rights reserved.</small>
    </div>
   </footer>
  );
}

export default Footer;
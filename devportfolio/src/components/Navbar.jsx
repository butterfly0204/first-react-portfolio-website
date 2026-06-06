import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { SiImessage } from "react-icons/si";
function Navbar() {
  return (
    <nav>
      <a href="#" >< FaHome /></a>
      <a href="#about" >< FaRegUser /></a>
      <a href="#experience" ><FaAddressBook  /></a>
      <a href="#services" >< RiServiceLine /></a>
      <a href="#contact" >< BiSolidContact /></a>
      <a href="#message" ><  SiImessage /></a>
     
    </nav>
  )
}

export default Navbar; 
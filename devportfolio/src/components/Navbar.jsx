import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { SiImessage } from "react-icons/si";
import { useState } from "react";
function Navbar() {
  const [activeNav, setactiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={ () => setactiveNav('#')} className={activeNav === "#"? 'active':'' } >< FaHome /></a>
      <a href="#about" onClick={ () => setactiveNav('#about')} className={activeNav === "#about"? 'active' : ""} >< FaRegUser /></a>
      <a href="#experience" ><FaAddressBook  /></a>
      <a href="#services" >< RiServiceLine /></a>
      <a href="#contact" >< BiSolidContact /></a>
      <a href="#message" ><  SiImessage /></a>
     
    </nav>
  )
}

export default Navbar; 
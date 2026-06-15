import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { SiImessage } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
function Navbar() {
  const [activeNav, setactiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={ () => setactiveNav('#')} className={activeNav === "#"? 'active':'' } >< FaHome /></a>
      <a href="#about" onClick={ () => setactiveNav('#about')} className={activeNav === "#about"? 'active' : ""} >< FaRegUser /></a>
      <a href="#experience" onClick={ () => setactiveNav('#experience')} className={activeNav === "#experience"? 'active' : ""} ><FaAddressBook  /></a>
      <a href="#services"onClick={ () => setactiveNav('#services')} className={activeNav === "#services"? 'active' : ""}  >< RiServiceLine /></a>
      <a href="#projects"onClick={ () => setactiveNav('#projects')} className={activeNav === "#projects"? 'active' : ""}  ><GrProjects /></a>
      <a href="#contact"onClick={ () => setactiveNav('#contact')} className={activeNav === "#contact"? 'active' : ""}  >< BiSolidContact /></a>
      <a href="#message"onClick={ () => setactiveNav('#message')} className={activeNav === "#message"? 'active' : ""}  ><  SiImessage /></a>
         </nav>
  )
}

export default Navbar; 
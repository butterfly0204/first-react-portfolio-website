import me from '../assets/IMG_3448.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { LuFolderCheck } from "react-icons/lu";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
         <div className="aboutme_img">
          <img src={me} alt="About img " />

         </div>

        </div>
        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward  className='about_icon' />
              <h5> Experience</h5>
              <small>1+</small>

            </article>
            <article className='about_card'>
             <FaUsersLine  className='about_icon'/>
              <h5> Clients</h5>
              <small>10+ worldwide</small>

            </article>
            <article className='about_card'>
             <LuFolderCheck className='about_icon'/>
              <h5> Project</h5>
              <small>20+ Completed</small>

            </article>

          </div>

          <p>Electronics and Computer Engineering student skilled in web and mobile development with React, Next.js,
              Node.js, and SQL. Passionate about building real-world applications, digital content creation, and growing
              into a professional Software Engineer.</p>
              <a href="#contact" className='btn btn-primary'> Lets Talk</a>
        </div>


      </div>
      
    </section>
  );
}

export default About;
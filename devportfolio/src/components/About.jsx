import me from '../assets/IMG_3448.jpg'
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

            </article>

          </div>

        </div>


      </div>
      
    </section>
  );
}

export default About;
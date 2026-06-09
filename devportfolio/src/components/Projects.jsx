import img1 from '../assets/gospelhom.png'
import img2 from '../assets/bootstrapwebsite.png'
import img3 from '../assets/mywatch.png'
import img4 from '../assets/favourspace.png'
import img5 from '../assets/gymwebsite.png'
import img6 from '../assets/fintechwebsite.png'

function Projects() {
  return (
   <section id="project">
    <h5>My Recent work </h5>
    <h2>Projects</h2>

    <div className="container project_container">

      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img1} alt="Gospel Home Channel Website" />
        </div>
        <h3>Gospel Home Channel Website</h3>
         <a href=" https://butterfly0204.github.io/Gospel-home-channel/" className="btn" target="_blank"></a>  
         
      </article>


      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img2} alt="" />
        </div>
        <h3>A Bootstrap Bootcamp Website</h3>
          <a href="https://butterfly0204.github.io/bootstrap-tutorial/"className="btn" target="_blank"></a>
    
      </article>


      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img3} alt="" />
        </div>
        <h3>Digital Watch website</h3>
          <a href=" https://butterfly0204.github.io/my-digital-watch-landing-page/" className="btn" target="_blank"></a>

      </article>

      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img4} alt="" />
        </div>
        <h3>Real-Estate Landing Page</h3>
            <a href="https://butterfly0204.github.io/favourspace-real-estate-landing-page/"className="btn"></a>

      </article>
            
      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img5} alt="" />
        </div>
        <h3>A gym website</h3>
          
            <a href="https://butterfly0204.github.io/gym-website/" className="btn"></a>
          
      </article>


      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img6} alt="" />
        </div>
        <h3>Afintech Website</h3>
            <a href="https://butterfly0204.github.io/fintech/"className="btn"></a>
           
      </article>

    </div>


   </section>
  );
}

export default Projects;
import img1 from '../assets/gospelhom.png'
import img2 from '../assets/bootstrapwebsite.png'
import img3 from '../assets/mywatch.png'
import img4 from '../assets/fintechwebsite.png'
import img5 from '../assets/gymwebsite.png'

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
          <a href="https://github.com/butterfly0204/bootstrap-tutorial"className="btn" target="_blank"></a>
    
      </article>


      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img3} alt="" />
        </div>
        <h3>Digital Watch website</h3>
          <a href=" https://butterfly0204.github.io/my-digital-watch-landing-page/" className="btn btn-primary" target="_blank"></a>

      </article>
      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img4} alt="" />
        </div>
        <h3>This is a portfolio Item Title</h3>
            <a href="https://butterfly0204.github.io/favourspace-real-estate-landing-page/"></a>
            
      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img5} alt="" />
        </div>
        <h3>This is a portfolio Item Title</h3>
            <a href="https://butterfly0204.github.io/favourspace-real-estate-landing-page/"></a>
            <a href="https://butterfly0204.github.io/gym-website/"></a>
            <a href="https://butterfly0204.github.io/fintech/"></a>
      </article>
      <article className="project_item">
        <div className="projectitem_image">
          <img src= {img6} alt="" />
        </div>
        <h3>This is a portfolio Item Title</h3>
            <a href="https://butterfly0204.github.io/favourspace-real-estate-landing-page/"></a>
            <a href="https://butterfly0204.github.io/gym-website/"></a>
            <a href="https://butterfly0204.github.io/fintech/"></a>
      </article>

    </div>


   </section>
  );
}

export default Projects;
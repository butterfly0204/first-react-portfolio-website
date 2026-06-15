import img1 from '../assets/gospelhom.png'
import img2 from '../assets/bootstrapwebsite.png'
import img3 from '../assets/mywatch.png'
import img4 from '../assets/favourspace.png'
import img5 from '../assets/gymwebsite.png'
import img6 from '../assets/fintechwebsite.png'



const data = [
  {
    id:1,
    image:img1,
    title: "Gospel Home Channel",
    demo:"https://butterfly0204.github.io/Gospel-home-channel/"


  },

  {
     id:2,
    image:img2,
    title: "A Bootstrap Bootcamp Website",
    demo:"https://butterfly0204.github.io/bootstrap-tutorial/"

  },
  {
     id:3,
    image:img3,
    title: "A digital Watch website",
    demo:"https://butterfly0204.github.io/my-digital-watch-landing-page/"

  },

  {
     id:4,
    image:img4,
    title: "A Bootstrap Bootcamp Website",
    demo:"https://butterfly0204.github.io/favourspace-real-estate-landing-page/"


  },
  {
     id:5,
    image:img5,
    title: "A Gym website",
    demo:"https://butterfly0204.github.io/gym-website/"

  },

{
   id:6,
    image:img6,
    title: "A fintech Website",
    demo:"https://butterfly0204.github.io/fintech/"

}
]
function Projects() {

  return (
   <section id="project">
    <h5>My Recent work </h5>
    <h2>Projects</h2>

    <div className="container project_container">

      {
        data.map( ( {id, image, title, demo}) =>{
          return(

             <article key={id} className="project_item">
              <div className="projectitem_image">
                <img src= {image} alt={title} />
              </div>
              <h3>{title}</h3>
               <a href= {demo} className="btn" target="_blank">GitHub</a>  
               
            </article> 
          )

        })
      }


    </div>


   </section>
  );
}

export default Projects;


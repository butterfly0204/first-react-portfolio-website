import { IoMdCheckmarkCircle } from "react-icons/io";
function Experience(){
  return(
    <>
    <section id="experience"> 
      <h5>Skills i have</h5>
      <h2>My Experience</h2>

      <div className = "container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>BOOTSTRAP</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>TAILWINDCSS</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>JAVASCRIPT</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>REACT</h4>
            <small className="text-light">Experienced</small>
             </article>

          </div>


        </div>
        {/* bACKEND */}
         <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>NODE JS</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>MANGODB</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>PHP</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>MYSQL</h4>
            <small className="text-light">Experienced</small>
             </article>
            <article className="experience_details">
              <IoMdCheckmarkCircle />
            <h4>PYTHON</h4>
            <small className="text-light">Experienced</small>
             </article>
           

          </div>


        </div>
     
      </div>


    </section>
    </>
  )
}


export default Experience
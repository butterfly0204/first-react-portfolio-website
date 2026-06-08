import { IoMdCheckmark } from "react-icons/io";
function Services() {


  return(
   <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
         
          <h3>
            UI/UX Design
          </h3>

        </div>
        <ul className="service_list">

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>User Research</p>
        </li>

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Wireframing and Prototyping</p>
        </li>

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Responsive UI Design</p>
        </li>

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>User Experience Optimization</p>
        </li>

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Design systems and figma </p>
        </li>

        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>User Journey Mapping</p>
        </li>
        
        </ul>
      </article>


        <article className="service">
        <div className="service_head">
          <h3>
            Web Development
          </h3>

        </div>
        <ul className="service_list">
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Responsive Website Development</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Frontend Development</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Backend Integration</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>API Development and Integration</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Full-Stact Development </p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Bug Fixing and Maintainance</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Deployment</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Database Integration</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Landing Page Development</p>
        </li>
        
        </ul>
      </article>




        <article className="service">
        <div className="service_head">
          <h3>
           Content Creation
          </h3>

        </div>
        <ul className="service_list">
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Social Media Content Creation</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Tech Content Creation </p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Visual Content Design </p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Photography and Editing</p>
        </li>
        <li>
          <IoMdCheckmark className="servicelist_Icon" />
          <p>Product Photography </p>
        </li>
       
        
        </ul>
      </article>


    </div>

   </section>
  )
}

export default Services
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import image from "../assets/my-image.png"

const data = [
    {
        img: image,
        name:"Mrs Ugbeh",
        review: ` "Working with Favour was a great experience. She pays attention
                   to detail, communicates clearly, and consistently delivers clean,
                    responsive web interfaces. Her dedication to learning
                    and improving her skills is evident in every project she takes on."`

    },
    {
        img: image,
        name:"Mr David",
        review: ` "Favour transformed our ideas into a modern and user-friendly website.
                   She was professional throughout the process, met deadlines,
                   and ensured the final product looked great on both desktop and mobile devices."`

    },
    {
        img: image,
        name:"Mr Ugbeh",
        review: ` "What stands out about Favour is her problem-solving mindset.
                   Whenever challenges arose during development, she approached them methodically and found effective solutions.
                   I would gladly work with her again."`

    },
    {
        img: image,
        name:"Mr Emmanuel",
        review: ` "Favour combines technical knowledge with creativity.
                   Her ability to create visually appealing designs while maintaining
                   functionality helped our project exceed expectations."`

    },
    {
        img: image,
        name:"Miss Peace",
        review: ` "Reliable, hardworking, and eager to learn,
                   Favour is a developer who genuinely cares about delivering quality work.
                   She takes feedback well and always strives to produce the best possible results."`

    },

]
function Testimonial(){
    return(
    <section id= "testimonials">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

       <Swiper
  className="container testimonials_container"
  modules={[Pagination]}
  spaceBetween={40}
  slidesPerView={1}
  pagination={{ clickable: true }}
>
  {data.map(({ img, name, review }, index) => (
    <SwiperSlide key={index}>
      <article className="testimonial">
        <div className="client_avater">
          <img src={img} alt={name} />
        </div>

        <h5 className="client_name">{name}</h5>
        <small className="client_review">{review}</small>
      </article>
    </SwiperSlide>
  ))}
</Swiper>
    </section>

    )
}
export default Testimonial




// import { useState } from "react";

// const Testimonial = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       let values = {...formData};

//     if (FormData.name === '') {
//       console.log("yy");
//       setErrors((errors) => ({ ...errors, [name]: "name is required" }));
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label> Name </label>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span> {errors.name} </span> 
//             {formData.name}
//           </p>
//         </div>
//         <div>
//           <label> Email </label>
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span></span>
//           </p>
//         </div>
//         <div>
//           <label> Password </label>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span></span>
//           </p>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Testimonial;


// import { useState } from "react";

// const Testimonial = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       let values = {...formData};

//     if (FormData.name === '') {
//       console.log("yy");
//       setErrors((errors) => ({ ...errors, [name]: "name is required" }));
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label> Name </label>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span> {errors.name} </span> 
//             {formData.name}
//           </p>
//         </div>
//         <div>
//           <label> Email </label>
//           <input
//             type="email"
//             placeholder="Email address"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span></span>
//           </p>
//         </div>
//         <div>
//           <label> Password </label>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <p style={{ color: "red" }}>
//             <span></span>
//           </p>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Testimonial;

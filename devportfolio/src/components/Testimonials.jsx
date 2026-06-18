import image from "../assets/my image.png"

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
                   I would gladly work with her again.`

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

        <div className="container testimonials_container">


            {
                data.map(({img,name,review}, index) =>{

                    return(
                          <article key={index} className="testimonial">
                <div className="client_avater">
                    <img src={img} alt="image" />

                </div>
                    <h5 className="client_name"> {name}</h5>
                    <small className="client_review">{review} </small>

            </article>
                    )

                })
            }
          
        </div>
    </section>

    )
}
export default Testimonial
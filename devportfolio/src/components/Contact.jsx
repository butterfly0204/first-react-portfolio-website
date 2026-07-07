import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
 import { useRef } from 'react';
import emailjs from "@emailjs/browser";;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_py6dp84', 'template_lr5g8uh', form.current, {
        publicKey: 'BiqLGfyoFdqyosy0d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); 
    };




  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container"> 
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_icon" />
           <h4> Email me</h4>
           <h5>favourmogaji3@gmail.com</h5>
           <a href="mailto:favourmogaji3@gmail.com" target="_blank">Send me a message</a>

          </article>
          <article className="contact_option">
           <FaWhatsapp className="contact_icon"/>
           <h4>whatsapp</h4>
           <h5>Let's Talk</h5>
           
           <a href="https://wa.me/2347032034830" target="_blank">Send me a message</a>

          </article>

          

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send me Your message</button>
        </form>
      </div>


     
    </section>
  );
}

export default Contact;
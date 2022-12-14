import React from 'react'
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bd19gie', 'template_4uwhx0e', form.current, 'GHanAPbae1T7Az0vq')
      .then((result) => {
        window.alert('Your Message has been sent');
          // console.log(result.text);
      }, (error) => {
        window.alert('something went wrong please try again later');
          // console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact" className="container">
      <h5 className="text-light">Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>kumarvikashv681@gmail.com</h5>
            <a href="mailto:kumarvikashv681@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+918076864339">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message'required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
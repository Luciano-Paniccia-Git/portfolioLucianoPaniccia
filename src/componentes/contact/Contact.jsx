import React from "react";
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';



export default function Contact () {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hbp5dg9', 'YOUR_TEMPLATE_ID', form.current, 'RitRZ44rsy3VtJdf_')

        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <section id="contact">
                <h2>Contactame</h2>
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>chuchopaniccia@gmail.com</h5>
                        <a href="mailto:chuchopaniccia@gmail.com">Enviar un mensaje</a>
                        </article>
                        <article className="contact__option">
                        <BsWhatsapp/>
                        <h4>WhatsApp</h4>
                        <h5>+5493426135874</h5>
                        <a href="https://wa.link/cmhr69" target="_blank">Enviar un mensaje</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Nombre Completo" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" rows="7" placeholder="Mensaje" required></textarea>
                        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
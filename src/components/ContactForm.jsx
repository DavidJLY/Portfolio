import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.scss";

export const ContactForm = ({ language }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mq49p09", "template_3z0b5ed", form.current, {
        publicKey: "dXPo3bfPuGFsJCnyA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>{language === "fr" ? "Contactez-moi" : "Contact me"}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>{language === "fr" ? "Nom" : "Name"}</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

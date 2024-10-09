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
    <div className="contact-form container mt-5">
      <h2 className="text-center">
        {language === "fr" ? "Contactez-moi" : "Contact me"}
      </h2>
      <form ref={form} onSubmit={sendEmail} className="mt-4">
        <div className="mb-3 col-md-6 mx-auto">
          <label className="form-label">
            {language === "fr" ? "Nom" : "Name"}
          </label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder={language === "fr" ? "Votre nom" : "Your name"}
          />
        </div>
        <div className="mb-3 col-md-6 mx-auto">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder={language === "fr" ? "Votre email" : "Your email"}
          />
        </div>
        <div className="mb-3 col-md-6 mx-auto">
          <label className="form-label">
            {language === "fr" ? "Message" : "Message"}
          </label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder={language === "fr" ? "Votre message" : "Your message"}
          ></textarea>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value={language === "fr" ? "Envoyer" : "Send"}
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
};

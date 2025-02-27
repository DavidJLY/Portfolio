import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.scss";

export const ContactForm = ({ language }) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_JS_PUBLICKEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true);
          form.current.reset(); // Réinitialiser le formulaire
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
      {messageSent && (
        <p className="text-success text-center">
          {language === "fr"
            ? "Votre message a été envoyé avec succès !"
            : "Your message was sent successfully!"}
        </p>
      )}
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

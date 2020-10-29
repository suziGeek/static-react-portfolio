import React from "react";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      <form
        name="contact"
        action="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-field">
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <label htmlFor="name">
            <div className="label-content">Name:</div>
            <input type="text" name="name" required />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="email">
            <div className="label-content">Email:</div>
            <input type="email" name="email" required />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="message">
            <div className="label-content">Message:</div>
            <textarea className="stretch" name="message" rows="5" required />
          </label>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

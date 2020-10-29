import React from "react";

import "./ContactForm.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='contact-wrapper'>
        <form
          className='contact-form'
          data-netlify-recaptcha='true'
          data-netlify='true'
          onSubmit={this.handleSubmit}
          name='Contact'
          netlify
        >
          <h3>Get in touch!</h3>

          <p>
            <label className='label-content'>
              <input
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
                placeholder='Your Name:'
              />
            </label>
          </p>

          <p>
            <label className='label-content'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='Your Email:'
              />
            </label>
          </p>

          <p>
            <label className='label-content'>
              <textarea
                className='form-field'
                placeholder='Your Message:'
                name='message'
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <div data-netlify-recaptcha='true'></div>

          <p>
            <button type='submit'>Send it.</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactForm;

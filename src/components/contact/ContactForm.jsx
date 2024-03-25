import React, { useState } from "react";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    textArea: "",
  });

  // handle change function to target the value entered
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // submit function
  const submitForm = (e) => {
    e.prevendDefault();
    console.log(contactForm);
  };

  return (
    <>
      <div className="contact-form" onSubmit={submitForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={contactForm.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emailAddress"
          placeholder="Email Address"
          value={contactForm.emailAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={contactForm.subject}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="textArea"
          className="form-text-area"
          placeholder="your message"
          value={contactForm.textArea}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn">
          send
        </button>
      </div>
    </>
  );
};

export default ContactForm;

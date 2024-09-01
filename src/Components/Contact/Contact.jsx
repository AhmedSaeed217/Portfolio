import React, { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {

  const [formData, setFormData] = useState({
    name_from: '',
    email_from: '',
    subject_from: '',
    message: '',
  })
  const [formErrors, setFormerrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }



  const sendEmail = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name_from.trim()) {
      errors.name_from = "Name Is Required"

    } else if (formData.name_from.length < 3) {
      errors.name_from = "Minimum Length Is 3 Characters"
    }
    if (!formData.email_from.trim()) {
      errors.email_from = "Email Is Required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email_from)) {
      errors.email_from = "Email is Not Valid"
    }
    if (!formData.subject_from.trim()) {
      errors.subject_from = "Subject Is Required"
    }
    if (!formData.message.trim()) {
      errors.message = "Message Is Required"
    }

    setFormerrors(errors)
    if (Object.keys(errors).length === 0) {

      emailjs.sendForm('service_k5gy90p', 'template_t12b9wa', e.target, '-ni32qXay-A16kocM');
      e.target.name_from.value = "";
      e.target.email_from.value = "";
      e.target.subject_from.value = "";
      e.target.message.value = "";
      toast.success("Your Message Sent successfully", {
        duration: 4000,
        position: 'bottom-right',
      })
    } else {

    }

  }


  return <>
    <section id='contact' className={styles.contact}>
      <div className="container">
        <div className="head-title">
          <h1>Contact Me</h1>
          <p>Get in touch with me,Feel free to send me a message</p>
        </div>

        <form onSubmit={sendEmail}>
          <input className={formErrors.name_from ? `${styles.errorMessage}` : ''} type="text" name='name_from' placeholder={formErrors.name_from && `${formErrors.name_from}` || "Your Name"} onChange={handleChange} />
          <input className={formErrors.email_from ? `${styles.errorMessage}` : ''} type="email" name='email_from' placeholder={formErrors.email_from && `${formErrors.email_from}` || "Your Email"} onChange={handleChange} />
          <input className={formErrors.subject_from ? `${styles.errorMessage}` : ''} type="text" name='subject_from' placeholder={formErrors.subject_from && `${formErrors.subject_from}` || "Subject"} onChange={handleChange} />
          <textarea className={formErrors.message ? `${styles.errorMessage}` : ''} name='message' placeholder={formErrors.message && `${formErrors.message}` || "Your Message"} onChange={handleChange} ></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>




    </section>

  </>
}

import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing icons
import classes from "./Contact.module.css";
import Swal from "sweetalert2";

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Get email value
    const email = event.target.email.value;

    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Swal.fire(
        "Invalid Email",
        "Please enter a valid email address.",
        "error"
      );
      return;
    }

    setLoading(true);

    const formData = new FormData(event.target);
    const secretKey = import.meta.env.VITE_SECRET_KEY;
    formData.append("access_key", secretKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Thank You!", "Message Sent Successfully", "success");
        event.target.reset();
      } else {
        Swal.fire("Error", data.message || "Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Network Error", "Unable to send message.", "error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contact_container}>
        {/* Contact Information Section */}
        <div className={classes.contact_info}>
          <h2>Contact Info</h2>
          <ul className={classes.info_list}>
            <li>
              <FaMapMarkerAlt className={classes.icon} />
              <span> Gambia Street, Addis Ababa, Ethiopia</span>
            </li>
            <li>
              <FaEnvelope className={classes.icon} />
              <span>yigermal2002@gmail.com</span>
            </li>
            <li>
              <FaPhoneAlt className={classes.icon} />
              <span>+251 947476040</span>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={onSubmit} className={classes.contact_form}>
          <h2>Contact Form</h2>
          <div className={classes.input_box}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              className={classes.field}
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </div>
          <div className={classes.input_box}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className={classes.field}
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <div className={classes.input_box}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className={`${classes.field} ${classes.mess}`}
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

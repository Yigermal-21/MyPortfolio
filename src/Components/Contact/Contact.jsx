import React from "react";
import classes from "./Contact.module.css";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const secretKey = import.meta.env.VITE_SECRET_KEY;

    formData.append("access_key", secretKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Log the payload to check its structure
    console.log(json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();
      console.log(data); // Log the API response for error details

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: `Something went wrong: ${data.message || "Please try again."}`,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error",
        text: "Unable to send message. Please check your connection.",
        icon: "error",
      });
    }
  };

  return (
    <section className={classes.contact} id="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact</h2>
        <div className={classes.input_box}>
          <label>Full Name</label>
          <input
            type="text"
            className={classes.field}
            placeholder="Enter Your name"
            name="name"
            required
          />
        </div>
        <div className={classes.input_box}>
          <label>Email Address</label>
          <input
            type="email"
            className={classes.field}
            placeholder="Enter Your email"
            name="email"
            required
          />
        </div>
        <div className={classes.input_box}>
          <label>Your Message</label>
          <textarea
            name="message"
            className={`${classes.field} ${classes.mess}`}
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

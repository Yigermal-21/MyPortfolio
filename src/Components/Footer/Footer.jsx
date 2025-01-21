import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa"; // Importing icons
import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      {/* Social Links with Icons */}
      <div className={classes.footerSocials}>
        <a
          href="https://github.com/Yigermal-21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={classes.icon} /> {/* GitHub Icon */}
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={classes.icon} /> {/* LinkedIn Icon */}
        </a>
      
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={classes.icon} /> {/* Facebook Icon */}
        </a>
        <a
          href="https://t.me/Yige_A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className={classes.icon} /> {/* Telegram Icon */}
        </a>
        <a
          href="https://wa.me/+251947476040"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={classes.icon} /> {/* WhatsApp Icon */}
        </a>
      </div>

      {/* Navigation Links */}
      <div className={classes.footerNav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Copyright */}
      <div className={classes.footerCopyright}>
        <p>&copy; {new Date().getFullYear()} Yigermal A. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

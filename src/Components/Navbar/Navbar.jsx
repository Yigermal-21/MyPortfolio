import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close icon
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navbar}>
      <a className={classes.title} href="/">
        Yigermal
      </a>
      <button className={classes.navbarToggle} onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}{" "}
        {/* Toggle icon based on isOpen */}
      </button>
      <div className={`${classes.menu} ${isOpen ? classes.open : ""}`}>
        <ul
          className={`${classes.menuItems} ${isOpen ? classes.openItems : ""}`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react'
import classes from './Hero.module.css'
import Profile_pic from "../../assets/img/Profile_pic.jpg";
import Resume from '../../assets/img/Resume.png'

function Hero() {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Hi I'am Yigermal Asmamaw</h1>
        <p className={classes.description}>
          "a passionate Full-Stack Developer skilled in building dynamic and
          responsive web applications. With strong expertise in HTML, CSS,
          JavaScript, Bootstrap, React, Node.js, Express.js, and MySQL, I
          specialize in creating seamless user experiences and efficient backend
          systems. I have a solid grasp of API integration and enjoy turning
          complex ideas into functional and elegant solutions. Let's build
          something amazing together!".{" "}
        </p>
        <a href={Resume} className={classes.contactBtn}>
          Hire Me
        </a>
      </div>
      <img src={Profile_pic} className={classes.hero_img} alt="" />
      <div className={classes.hero_topBlur}></div>
      <div className={classes.hero_bottomBlur}></div>
    </section>
  );
}

export default Hero;
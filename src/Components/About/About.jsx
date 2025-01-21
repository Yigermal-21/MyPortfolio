import React from 'react'
import classes from './About.module.css'
import aboutimg from '../../assets/img/aboutimg.jpg'
import frontend from '../../assets/img/frontend.webp'
import backend from '../../assets/img/backend.webp'


function About() {
  return (
    <section className={classes.container} id='about'>
      <h2 className={classes.title}>About</h2>
      <div className={classes.content}>
        <img src={aboutimg} alt="" className={classes.aboutimg} />

        <ul className={classes.aboutItems}>
          <li className={classes.aboutItem}>
            <img
              src={frontend}
              alt="frontendicon"
              className={classes.aboutItemImg}
            />
            <div className={classes.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Experienced frontend Developer with an experience in building responsive
                and optimized websites.
              </p>
            </div>
          </li>
          <li className={classes.aboutItem}>
            <img
              src={backend}
              alt="backtendicon"
              className={classes.aboutItemImg}
            />
            <div className={classes.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Results-oriented Backend Developer with expertise on Javascript, Node.js,Express.js,MySQL,Git and developing robust RESTful APIs for scalable backend systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About
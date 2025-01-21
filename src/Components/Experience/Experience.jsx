import React, { useEffect, useState } from "react";
import classes from "./Experience.module.css";

function Experience() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  return (
    <div className={classes.container} id ='experience'>
      <h1>My Skills</h1>
      <div className={classes.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.skillCard}>
            <img
              src={skill.imagesrc}
              alt={`${skill.title} icon`}
              className={classes.skillIcon}
            />
            <p className={classes.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

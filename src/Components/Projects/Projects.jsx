import React from "react";
import classes from "./Projects.module.css";

// Import images from the assets folder
import NetflixNew from "../../assets/img/NetflixNew.jpg";
import amzclone from "../../assets/img/amzclone.jpg";
import evangadif from'../../assets/img/evangadif.jpg'

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A React-based project reacreating the core functionalities of the Netflix Streaming Service.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Yigermal-21/Netflix-Clone-June24.git",
    live: "https://yigermal-21.github.io/Netflix-Clone-June24/",
    backgroundImage: NetflixNew, // Local image from assets
  },
  {
    id: 2,
    title: "Amazon clone",
    description:
      "A React-based e-commerce website that simulates the core features of Amazon,including product browsing, user accounts, shopping cart and checkouts.",
    technologies: ["Node.js", "Stripe", "Firebase"],
    github: "hhttps://github.com/Yigermal-21/Amazon-Clone.git",
    live: "https://amazon-clone-7ewk.onrender.com",
    backgroundImage: amzclone, // Local image from assets
  },
  {
    id: 3,
    title: "Evangadi Forum",
    description:
      "A platform for building online communities, where users can ask, answer and connect.",
    technologies: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://evangadi-forum-group-2-4-2024.netlify.app/auth",
    backgroundImage: evangadif, // Local image from assets
  },
];

function Projects() {
  return (
    <div className={classes.container} id="projects">
      <h2 className={classes.heading}>Projects</h2>
      <div className={classes.projectList}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={classes.projectCard}
            style={{
              "--default-background-image": `url(${project.backgroundImage})`,
            }}
          >
            <div className={classes.overlay}>
              <h3 className={classes.projectTitle}>{project.title}</h3>
              <p className={classes.projectDescription}>
                {project.description}
              </p>
              <p className={classes.projectTechnologies}>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className={classes.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.projectLink}
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.projectLink}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

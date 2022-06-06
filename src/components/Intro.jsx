import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function Intro() {
  return (
    <section className="intro">
      <h2>Bonjour, je suis Fabien</h2>
      <h1>Je suis Développeur Front-end</h1>
      <div className="icons">
        <a href="https://www.linkedin.com/in/fabien-thiot/">
          <LinkedInIcon />
        </a>
        <a href="mailto:fabienthiot@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/T-Fabien">
          <GitHubIcon />
        </a>
      </div>
      <div>
        <button className="intro__btn btn_primary">
          <p>Télécharger le CV</p> <i></i>
        </button>
      </div>
      <a href="#global__info" className="intro__arrow">
      <DoubleArrowIcon />
      </a>
    </section>
  );
}

export default Intro;

import React from "react";
import { Link } from "react-router-dom";

import GlobalInfoCard from "./GlobalInfoCard";

import Office from "../../assets/images/office-building.png";
import Education from "../../assets/images/education.png";
import Project from "../../assets/images/data.png";

function GlobalInfo() {
  return (
    <section className="global__info" id="global__info">
      <hr></hr>
      <h3>Mes Informations</h3>
      <p className="global__info__resume">
        Passionné de développement depuis que j’ai 12 ans, j’ai commencé en
        modifiant des fichiers JSON qui changé les propriétés d’un serveur
        Minecraft. C’est en les modifiants, avoir quelque chose qui était selon
        ma vision ou mes envies, que cela a lancé ma passion pour le web. Je me
        suis donc orienté après le BAC dans un BTS orienté développement orienté
        objet (C#), puis une Licence Professionnelle et une formation
        Openclassrooms sur le développement web.
        <br />
        Je suis désormais titulaire d’un double bac + 3 et a la recherche d’un
        emploi en tant que Développeur Frontend.
      </p>
      <div className="global__info__cards">
        <GlobalInfoCard
          class="Education"
          link="/aboutme"
          img={Education}
          imgclass="global__info__cards__education"
          title="Diplômes"
          text="Bac+3/4: Développeur JavaScript React"
          secondtext="Bac+3: Licence T2I"
        />
        <GlobalInfoCard
          class="Office"
          link="/aboutme"
          img={Office}
          imgclass="global__info__cards__education"
          title="Expérience Pro"
          text="4 Mois d'éxpérience"
        />
        <GlobalInfoCard
          class="Project"
          link="/projects"
          img={Project}
          imgclass="global__info__cards__education"
          title="Projets"
          text="11+ Projets"
        />
      </div>
      <button className="global__info__btn btn_primary">
        <Link to="/contact">Contacter moi</Link>
        <i></i>
      </button>
    </section>
  );
}

export default GlobalInfo;

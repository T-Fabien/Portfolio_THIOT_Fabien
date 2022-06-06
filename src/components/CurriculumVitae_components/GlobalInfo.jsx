import React from "react";

import GlobalInfoCard from "./GlobalInfoCard";

import Office from "../../assets/images/office-building.png";
import Education from "../../assets/images/education.png";
import Project from "../../assets/images/data.png";

function GlobalInfo() {
  return (
    <section className="global__info" id="global__info">
      <hr></hr>
      <h3>Mes Informations</h3>
      <div className="global__info__cards">
        <GlobalInfoCard
          class="Education"
          img={Education}
          imgclass="global__info__cards__education"
          title="Diplômes"
          text="Bac+3: Licence T2I"
          secondtext="Bac+3/4: Formation Front-End"
        />
        <GlobalInfoCard
          class="Office"
          img={Office}
          imgclass="global__info__cards__education"
          title="Expérience Pro"
          text="4 Mois d'éxpérience"
        />
        <GlobalInfoCard
          class="Project"
          img={Project}
          imgclass="global__info__cards__education"
          title="Projets"
          text="11+ Projets"
        />
      </div>
      <p className="global__info__resume">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est
        voluptas vel commodi, itaque maxime modi molestiae sed voluptatibus
        aspernatur repellendus aperiam molestias iste, quaerat, expedita
        temporibus at necessitatibus unde! Quae illo, dolorem tempore rerum
        expedita asperiores iure obcaecati, ratione vel sed possimus veritatis
        delectus sunt quas soluta, facere velit nemo.
      </p>
    </section>
  );
}

export default GlobalInfo;

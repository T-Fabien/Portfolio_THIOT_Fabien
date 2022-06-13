import React from "react";

import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <section className="project__grid">
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/SportSee_Thumbnail.png")}
        title="SportSee - Tableau de bord d'analytics"
        langage="JS"
        framework="React"
        library="Recharts"
        option="API"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/FishEye_Thumbnail.png")}
        title="FishEye - Plateforme de photographes"
        langage="JS"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/Kasa_Thumbnail.png")}
        title="Kasa - Plateforme de publication d'annonces"
        langage="JS"
        framework="React"
        option="React-Router"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/Paladins_Thumbnail.png")}
        title="SportSee - Tableau de bord d'analytics"
        langage="JS"
      />
    </section>
  );
}

export default ProjectGrid;

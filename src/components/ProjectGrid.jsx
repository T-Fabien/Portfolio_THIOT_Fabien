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
        items={[
          require("../assets/images/site/Thumbnail/SportSee_Thumbnail.png"),
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_12_06012022"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/FishEye_Thumbnail.png")}
        title="FishEye - Plateforme de photographes"
        langage="JS"
        items={[
          require("../assets/images/site/FishEye/Homepage.png"),
          require("../assets/images/site/FishEye/Homepage__Filter.png"),
          require("../assets/images/site/FishEye/PhotographePage.png"),
          require("../assets/images/site/FishEye/PhotographePage__Filter.png"),
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_06_19072021_soutenance"
        hebergement="https://t-fabien.github.io/FabienTHIOT_06_19072021_soutenance/public/index.html"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/Kasa_Thumbnail.png")}
        title="Kasa - Plateforme de publication d'annonces"
        langage="JS"
        framework="React"
        option="React-Router"
        items={[
          require("../assets/images/site/Kasa/Homepage.png"),
          require("../assets/images/site/Kasa/LogementPage.png"),
          require("../assets/images/site/Kasa/LogementPage_noaccordion.png"),
          require("../assets/images/site/Kasa/AproposPage.png"),
          require("../assets/images/site/Kasa/ErrorPage.png"),
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_11_15122021"
      />
      <ProjectCard
        img={require("../assets/images/site/Thumbnail/Paladins_Thumbnail.png")}
        title="Paladins - Guide sur les personnages"
        langage="JS"
        items={[
          require("../assets/images/site/Paladins/ChampionListPage.png"),
          require("../assets/images/site/Paladins/ChampionListPage_filter.png"),
          require("../assets/images/site/Paladins/ChampionPage.png"),
        ]}
        link="https://github.com/T-Fabien/FabienTHIOT_06_19072021_soutenance"
      />
    </section>
  );
}

export default ProjectGrid;

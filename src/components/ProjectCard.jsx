import React from "react";

function ProjectCard(props) {
  return (
    <div className="project__grid__card">
      <img src={props.img} alt="" />
      <p className="project__grid__card__title">{props.title} </p>
      <div className="project__grid__card__tags">
        <p className="html">HTML / CSS</p>
        {props.langage && <p className="langage">{props.langage}</p>}
        {props.framework && <p className="framework">{props.framework}</p>}
        {props.library && <p className="library">{props.library}</p>}
        {props.option && <p className="option">{props.option}</p>}
      </div>
    </div>
  );
}

export default ProjectCard;

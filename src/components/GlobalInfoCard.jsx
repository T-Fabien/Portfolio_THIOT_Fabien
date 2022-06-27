import React from "react";
import { Link } from "react-router-dom";

function GlobalInfoCard(props) {
  return (
    <div className={"global__info__card card__" + props.class} >
      <Link to={props.link}>
      <div className="card__face1 face">
        <img src={props.img} alt="" className={props.imgclass} />
        <h4>{props.title}</h4>
      </div>
      <div className="card__face2 face">
        <p>{props.text}</p>
        {props.secondtext && <p>{props.secondtext}</p>}
      </div>
      </Link>
    </div>
  );
}

export default GlobalInfoCard;

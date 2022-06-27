import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Carrousel(props) {
  return (
    <div className="modal">
      <span className="close-modal" onClick={() => props.setShow(false)}>
        X
      </span>
      <Carousel
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
        stopOnHover={true}
        autoFocus={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
      >
        {props.img_items.map((img, index) => {
          return (
            <div key={index}>
              <img className="modal__img" src={img} />
              <div className="legend">
                <p className="project__grid__card__title">{props.title} </p>
                <div className="project__grid__card__tags ">
                  <p className="html">HTML / CSS</p>
                  {props.langage && <p className="langage">{props.langage}</p>}
                  {props.framework && (
                    <p className="framework">{props.framework}</p>
                  )}
                  {props.library && <p className="library">{props.library}</p>}
                  {props.option && <p className="option">{props.option}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="modal__links">
        <button className="btn_primary">
          <a href={props.link}>Lien GitHub</a> <i></i>
        </button>
        {props.hebergement && (
          <button className="btn_primary">
            <a href={props.hebergement}>Lien vers le site</a> <i></i>
          </button>
        )}
        <button className="btn_primary" onClick={() => props.setShow(false)}>
          <a>Fermer</a> <i></i>
        </button>
      </div>
    </div>
  );
}

export default Carrousel;

import React from "react";
import { Link } from "react-router-dom";

const CardsItem = (props) => {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <div className="cards-item-pic" category={props.label}>
            <img
              className="cards-item-img"
              src={props.src}
              alt="travel image"
            />
          </div>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardsItem;

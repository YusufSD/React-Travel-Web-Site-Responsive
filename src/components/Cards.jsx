import React from "react";
import CardsItem from "./CardsItem";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out These Travel</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardsItem
              src="https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/16:9/w_2580,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Adventure"
              path="/services"
            />
            <CardsItem
              src="https://get.wallhere.com/photo/sunset-sea-cityscape-bay-nature-beach-skyline-evening-morning-coast-horizon-dusk-vacation-ocean-1920x1200-px-573372.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardsItem
              src="https://get.wallhere.com/photo/Brazil-Stone-Arpoador-beach-sunset-1457317.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Luxury"
              path="/services"
            />
            <CardsItem
              src="https://f.vividscreen.info/soft/97528ba1c6d94233c0502181a0942a26/Kaanapali-Beach-Maui-Hawaii-1920x1200.jpg"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

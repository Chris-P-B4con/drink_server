import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { SliderData } from "./SliderData";
import "./DrinkCardsStyle.css";

function Home() {
  //Handle cookie sessions

  const [current, setCurrent] = useState(0);

  const bookDrink = (e) => {
    console.log(e)
    e.preventDefault();
    fetch("http://192.168.0.195:5000/api/drinks/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  };
  return (
    <>
      {SliderData.map((slide, index) => {
        return (
          <div className="drink__card">
            <div className="drink__card__header">
              <button onClick={bookDrink} id={slide.name}>
                <img
                  src={`${process.env.PUBLIC_URL}${slide.image}`}
                  alt={slide.name}
                />
              </button>
            </div>
            <div className="drink__card__body">
              <h3>{slide.name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;

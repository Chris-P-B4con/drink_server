import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { SliderData } from "./SliderData";
import "./DrinkCardsStyle.css";

function Home() {
  //Handle cookie sessions
  const length = SliderData.length;

  const [current, setCurrent] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className="section dark">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true}
        responsive={responsive}
        keyBoardControl={true}
        transitionDuration={500}
        centerMode={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {SliderData.map((slide, index) => {
          return (
            <div className="drink__card">
              <div className="drink__card__header">
                <img
                  src={`${process.env.PUBLIC_URL}${slide.image}`}
                  alt={slide.name}
                />
              </div>
              <div className="drink__card__body">
                <h3>{slide.name}</h3>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;

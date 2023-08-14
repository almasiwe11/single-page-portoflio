/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";

const ImageSlider = ({
  slides,
  height,
  currentIndex,
  width,
  setCurrentIndex,
}) => {
  const contLen = `${slides.length * width}rem`;
  const moveContainerWidth = (-100 * currentIndex) / slides.length;
  const imgContainerWidth = (100 * 0.75) / slides.length;
  const imageSliderStyle = {
    width: "100%",
    // overflow: "hidden",
  };

  const sliderRef = useRef(null);

  const sliderStyleLong = {
    height: height,
    display: "flex",
    gap: "1rem",
    width: contLen,
    transform: `translateX(${-width * currentIndex}rem)`,
    transition: "transform 0.3s ease-out",
    // border: "2px solid blue",
  };

  const imgContainerStyle = {
    height: "100%",
    width: `${width}rem`,
    transform: `translateX(${9}%)`,
    objectFit: "cover",
    // border: "1px solid red",
  };

  const imgStyle = {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  };

  function nextSlide() {
    setCurrentIndex((prev) => prev + 1);
    sliderRef.current.style.transition = "transform 0.3s ease-out";
  }

  function prevSlide() {
    setCurrentIndex((prev) => prev - 1);
    sliderRef.current.style.transition = "transform 0.3s ease-out";
  }

  console.log(currentIndex);

  useEffect(() => {
    sliderRef.current.addEventListener("transitionend", transitionEnd);
    function transitionEnd() {
      if (slides[currentIndex].tag === "Last Clone") {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(slides.length - 3);
      }

      if (slides[currentIndex].tag === "First Clone") {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(2);
      }
    }

    return () => {
      sliderRef.current.removeEventListener("transitionend", transitionEnd);
    };
  });

  return (
    <div className="imageSlider" style={imageSliderStyle}>
      <div className="imageSliderLong" style={sliderStyleLong} ref={sliderRef}>
        {slides.map((image) => (
          <div
            className="img-container"
            key={image.id}
            style={imgContainerStyle}
          >
            <img src={image.src} style={imgStyle} />
          </div>
        ))}
      </div>

      <div className="myWork__arrows">
        <ArrowLeft onPress={prevSlide} />
        <ArrowRight onPress={nextSlide} />
      </div>
    </div>
  );
};

export default ImageSlider;

function ArrowLeft({ onPress }) {
  return (
    <svg
      width="15"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onPress}
    >
      <path
        fill="black"
        d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"
      />
    </svg>
  );
}

function ArrowRight({ onPress }) {
  return (
    <svg
      width="15"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onPress}
    >
      <path
        fill="black"
        d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"
      />
    </svg>
  );
}

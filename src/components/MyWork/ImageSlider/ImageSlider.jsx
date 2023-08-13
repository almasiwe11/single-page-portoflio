/* eslint-disable react/prop-types */
import React from "react";

const ImageSlider = ({ slides, height, currentIndex }) => {
  const contLen = slides.length * 100;
  const moveContainerWidth = (-100 * currentIndex) / slides.length;
  const imgContainerWidth = (100 * 0.75) / slides.length;
  const imageSliderStyle = {
    width: "100%",
    // overflow: "hidden",
  };
  const sliderStyleLong = {
    height: height,
    display: "flex",
    gap: "1rem",
    width: `${contLen}%`,
    transform: `translateX(${moveContainerWidth}%)`,
    border: "2px solid blue",
  };

  const imgContainerStyle = {
    height: "100%",
    width: `${imgContainerWidth}%`,
    transform: `translateX(${20}%)`,
    objectFit: "cover",
    border: "1px solid red",
  };

  const imgStyle = {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="imageSlider" style={imageSliderStyle}>
      <div className="imageSliderLong" style={sliderStyleLong}>
        {slides.map((image) => (
          <div
            className="img-container"
            key={image.src}
            style={imgContainerStyle}
          >
            <img src={image.src} style={imgStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

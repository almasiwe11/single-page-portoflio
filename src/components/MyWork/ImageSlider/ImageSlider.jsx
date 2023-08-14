/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ slides, currentIndex, setCurrentIndex }) => {
  const contLen = `${slides.length * 100}%`;
  const imageSliderStyle = {
    width: "100%",
    overflow: "hidden",
  };

  const [viewPortWidth, setViewPortWidth] = useState(
    document.documentElement.clientWidth
  );

  let imageWidth;
  let middle;

  if (viewPortWidth < 950) {
    imageWidth = viewPortWidth * 0.72;
    middle = `translateX(${viewPortWidth * 0.15}px)`;
  } else {
    imageWidth = viewPortWidth * 0.4;
    middle = `translateX(${viewPortWidth * 0.3}px)`;
  }

  const sliderRef = useRef(null);
  const imgRef = useRef(null);
  const sliderStyleLong = {
    display: "flex",
    gap: "1rem",
    width: contLen,
    transform: `translateX(${(-imageWidth - 16) * currentIndex}px)`,
    transition: "transform 0.3s ease-out",
    // border: "2px solid blue",
  };

  const imgContainerStyle = {
    height: "100%",
    width: `${imageWidth}px`,
    transform: middle,
    objectFit: "cover",
    // border: "1px solid red",
  };

  const imgStyle = {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  };

  useEffect(() => {
    function handleResize() {
      console.log(viewPortWidth);
      setViewPortWidth(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewPortWidth]);

  function nextSlide() {
    if (currentIndex >= slides.length - 2) return;
    setCurrentIndex((prev) => prev + 1);
    sliderRef.current.style.transition = "transform 0.3s ease-out";
  }

  function prevSlide() {
    if (currentIndex <= 1) return;
    setCurrentIndex((prev) => prev - 1);
    sliderRef.current.style.transition = "transform 0.3s ease-out";
  }

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
            ref={imgRef}
          >
            <img src={image.src} style={imgStyle} className="img" />
          </div>
        ))}
      </div>

      <div className="myWork__arrows">
        <div className="myWork__arr">
          <ArrowLeft onPress={prevSlide} />
        </div>
        <div className="myWork__arr">
          <ArrowRight onPress={nextSlide} />
        </div>
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
        fill="white"
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
        fill="white"
        d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"
      />
    </svg>
  );
}

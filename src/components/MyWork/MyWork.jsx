import React, { useState } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
const MyWork = () => {
  const slides = [
    {
      src: "image-slide-1.jpg",
      alt: "Project 1 ",
    },
    {
      src: "image-slide-2.jpg",
      alt: "Project 2 ",
    },
    {
      src: "image-slide-3.jpg",
      alt: "Project 3 ",
    },
    {
      src: "image-slide-4.jpg",
      alt: "Project 4 ",
    },
    {
      src: "image-slide-5.jpg",
      alt: "Project 5 ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  function nextSlide() {
    setCurrentIndex((prev) => prev + 1);
  }

  function prevSlide() {
    setCurrentIndex((prev) => prev - 1);
  }

  return (
    <div className="myWork">
      <h2>My Work </h2>
      <ImageSlider
        slides={slides}
        height={"15rem"}
        currentIndex={currentIndex}
      />
      <div className="myWork__arrows">
        <ArrowLeft onPress={prevSlide} />
        <ArrowRight onPress={nextSlide} />
      </div>
    </div>
  );
};

export default MyWork;

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

import React, { useState } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
const MyWork = () => {
  const slides = [
    {
      src: "image-slide-4.jpg",
      alt: "Project 4 ",
      id: -1,
    },
    {
      src: "image-slide-5.jpg",
      alt: "Project 5 ",
      tag: "Last Clone",
      id: 1,
    },
    {
      src: "image-slide-1.jpg",
      alt: "Project 1 ",
      id: 2,
      tag: "return",
    },
    {
      src: "image-slide-2.jpg",
      alt: "Project 2 ",
      id: 3,
    },
    {
      src: "image-slide-3.jpg",
      alt: "Project 3 ",
      id: 4,
    },
    {
      src: "image-slide-4.jpg",
      alt: "Project 4 ",
      id: 5,
    },
    {
      src: "image-slide-5.jpg",
      alt: "Project 5 ",
      id: 6,
      tag: "return",
    },
    {
      src: "image-slide-1.jpg",
      alt: "Project 1 ",
      tag: "First Clone",
      id: 7,
    },
    {
      src: "image-slide-2.jpg",
      alt: "Project 2 ",
      id: 8,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <div className="myWork">
      <h2>My Work </h2>
      <ImageSlider
        slides={slides}
        height={"15rem"}
        width={"20"}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default MyWork;

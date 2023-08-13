import React from "react";
import Skill from "./Skill/Skill";
import {
  MotionGraphics,
  Photography,
  Illustrations,
  Apps,
  UIUX,
  GraphicDesign,
} from "../../elements/Svgs";
const Hero = () => {
  const skills = [
    {
      skill: "Graphic Design",
      background: "#755cde",
      className: "graphD",
    },
    {
      skill: "UI/UX",
      background: "#f6a560",
      className: "uiux",
    },
    {
      skill: "Apps",
      background: "#f39e9e",
      className: "apps",
    },
    {
      skill: "Illustrations",
      background: "#eb7565",
      className: "illur",
    },
    {
      skill: "Photography",
      background: "#61c4b7",
      className: "photo",
    },
    {
      skill: "Motion Graphics",
      background: "#552049",
      className: "motionG",
    },
  ];

  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Design solutions made easy</h1>
        <p>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>

      <div className="hero__skills">
        {skills.map((skill) => {
          <Skill
            skill={skill.skill}
            background={skill.background}
            class={skill.className}
          />;
        })}
      </div>
    </div>
  );
};

export default Hero;

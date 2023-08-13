import React from "react";

const Skill = ({ skill, background, nameClass, svg: Svg }) => {
  const skillStyle = {
    backgroundColor: background,
  };
  return (
    <div className={`skill ${nameClass}`} style={skillStyle}>
      <h3 className="skill__name"> {skill}</h3>
      <div className="skill__svg-container">
        <Svg />
      </div>
    </div>
  );
};

export default Skill;

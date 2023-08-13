import React from "react";
import Button from "../../elements/Button";
const Greeting = () => {
  return (
    <div className="greeting container">
      <div className="greeting__img-container">
        <img src="image-amy.webp" alt="Amy image" />
      </div>

      <div className="greeting-text">
        <h2>I’m Amy, and I’d love to work on your next project</h2>
        <p>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button background="#f39e9e" text="Free Consultation" />
      </div>
    </div>
  );
};

export default Greeting;

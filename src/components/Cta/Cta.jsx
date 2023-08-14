import React from "react";
import Button from "../../elements/Button";
const Cta = () => {
  return (
    <div className="cta container">
      <h3>Book a call with me</h3>
      <span>
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </span>
      <Button background="#f39e9e" text="Free Consultation" />
    </div>
  );
};

export default Cta;

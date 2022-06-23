import React from "react";
import "./button.scss";

const CLickButton = () => {
  alert("Click me");
};

const Button = (props) => {
  return (
    <div>
      <button onClick={CLickButton} className="buttonClick">
        {props.name}
      </button>
    </div>
  );
};
export default Button;

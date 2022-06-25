import React from "react";
import "./button.scss";

const CLickButton = () => {
  alert("Click me");
};

const Button = (props, test) => {
  return (
    <div>
      <button onClick={CLickButton} className="buttonClick" style={test.color}>
        {props.name}
      </button>
    </div>
  );
};
export default Button;

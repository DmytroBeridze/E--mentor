import React from "react";
import { useState } from "react";
import "./buttonUniversal.scss";

// * Побудова кнопки__________________
// const buttonActive = () => {
//   alert("Vivian");
// };

export const ButtonUniversal = (
  buttonColor,
  textColor,
  borderRadius,
  buttonName,
  margin,
  effectColor,
  effectStartPosition
) => {
  // *Збільшення кнопки_____________________

  const [mouseState, setmouseState] = useState(false);

  function addStyle() {
    setmouseState((mouseState) => !mouseState);
  }
  let toggleClass = mouseState ? "grow " : "null";
  let mooveClass = mouseState ? "moove " : "null";

  // ____________________________________________
  return (
    <>
      <button
        // onClick={buttonActive}
        style={{
          // TODO_Чому назва стилю без тире в ДОМ переписана так як треба?____________________
          backgroundColor: buttonColor,
          color: textColor,
          borderRadius: borderRadius,
          margin: margin,
        }}
        className={`ButtonUniversal ${toggleClass}`}
        onMouseEnter={addStyle}
        onMouseLeave={addStyle}
      >
        <div
          style={{ backgroundColor: effectColor, left: effectStartPosition }}
          className={`effect ${mooveClass}`}
        ></div>
        {buttonName}
      </button>
    </>
  );
};

// ! Робочий варіант___________________________
// const buttonActive = () => {
//   alert("Vivian");
// };

// export const ButtonUniversal = (
//   buttonColor,
//   textColor,
//   borderRadius,
//   buttonName,
//   margin
// ) => {
//   return (
//     <button
//       onClick={buttonActive}
//       style={{
//         // TODO_Чому назва стилю без тире в ДОМ переписана так як треба?____________________
//         backgroundColor: buttonColor,
//         color: textColor,
//         borderRadius: borderRadius,
//         margin: margin,
//       }}
//       className="ButtonUniversal"
//     >
//       {buttonName}
//     </button>
//   );
// };

import React, { useState } from "react";

import "./windovYes.scss";

export const WindovYes = ({ closeModal, closenWindovYes }) => {
  // const [openWindovYes, setWindovYes] = useState(false);

  return (
    <>
      <div className="WindovYesWrap">
        <div className="windowYesModal">
          {" "}
          <button
            onClick={() => {
              closenWindovYes(false);
              // closeModal(false);
            }}
          >
            X
          </button>
          <div className="windowYesModalTitle">Дякую за відповідь</div>
        </div>
      </div>
      {/* <div className="WindovYesWrap">
        <button onClick={() => closeModal(false)}>YESBUT</button>
      </div> */}
    </>
  );
};

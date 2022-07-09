import classNames from "classnames";
import React, { useState } from "react";
import { useRef } from "react";
import styles from "./modal.module.scss";
import { ModalSubmodal } from "./ModalSubmodal";
import { WindovYes } from "./WindovYes";

function Modal({ closeModal }, { closeSubModal }) {
  // const [openModal, setOpenModal] = useState(false);
  // setOpenModal((openModal) => !setOpenModal);
  const testRef = useRef(null);
  const clickEvent = () => {
    // console.log(testRef.current.value);
    if (testRef.current.value === "yes") {
      closeModal(false);
      // } else if (testRef.current.value === "y") {
      //   closeModal(false);
      // !Проба коллбек_______________________
    } else if (testRef.current.value === "y") {
      // closeModal(false);
      setWindovYes(true);
    } else if (testRef.current.value === "no") {
      setOpenSubModal(true);
    } else console.log("!!!!");
  };

  const [openWindovYes, setWindovYes] = useState(false);

  const [openSubModal, setOpenSubModal] = useState(false);

  return (
    <div className={styles.modalBackground}>
      {openSubModal && <ModalSubmodal closeSubModal={setOpenSubModal} />}
      {/* <button onClick={setOpenSubModal}>dfjhdfjjk</button> ; */}
      <div className={styles.modalContainer}>
        {/* YesBUTTON_________________ */}
        {/* <button onClick={() => setWindovYes(true)}>YESBUT</button> */}
        {openWindovYes && <WindovYes closenWindovYes={setWindovYes} />}

        {/* Close button_____ */}
        <button
          className={styles.closeModalBtn}
          onClick={() => closeModal(false)}
        >
          X
        </button>
        <div>
          <h2 className={styles.modalTitle}>
            {" "}
            Чи згодні Ви з тим, що цей сайт просто неймовірний?
          </h2>
        </div>
        {/* Form_________________________________ */}
        <form>
          <input
            type="text"
            ref={testRef}
            placeholder="yes/no"
            className={styles.modalInput}
          />
        </form>
        <div className={styles.buttonWrap}>
          {/* Button RED____________________________ */}
          <button
            className={classNames(styles.buttonModal, styles.buttonRed)}
            onClick={setOpenSubModal}
          >
            cancel
          </button>

          <button
            className={classNames(styles.buttonModal, styles.buttonGreen)}
            onClick={clickEvent}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

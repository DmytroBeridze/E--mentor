import classNames from "classnames";
import React from "react";
import { useRef } from "react";
import styles from "./modal.module.scss";

function Modal({ closeModal }) {
  // const [openModal, setOpenModal] = useState(false);
  // setOpenModal((openModal) => !setOpenModal);
  const testRef = useRef(null);
  const clickEvent = () => {
    // console.log(testRef.current.value);
    if (testRef.current.value === "yes") {
      closeModal(false);
    } else if (testRef.current.value === "y") {
      closeModal(false);
    } else console.log("????????");
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
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
            placeholder="    yes/no"
            className={styles.modalInput}
          />
        </form>

        <div className={styles.buttonWrap}>
          <button className={classNames(styles.buttonModal, styles.buttonRed)}>
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

import React from "react";

import styles from "./modalSubmodal.module.scss";

export const ModalSubmodal = ({ closeSubModal }) => {
  //   const [openSubModal, setOpenSubModal] = useState(false);

  return (
    <>
      <div className={styles.modalWrapper}>
        <div className={styles.modalSubmodalBlock}>
          <div className={styles.modalSubmodal}>
            <button
              className={styles.subModalBtn}
              onClick={() => {
                closeSubModal(false);
              }}
            >
              testBTN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

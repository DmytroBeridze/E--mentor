import { ButtonUniversal } from "../../button/ButtonUniversal";
import styles from "./informationBlock.module.scss";

import ModalWindowInformation from "../../modalWindowInformation/ModalWindowInformation";
import { useState } from "react";

const InformationBlock = () => {
  const [infoModal, setInfomodal] = useState(false);
  return (
    <>
      <div className={styles.informationBlockWrapper}>
        {infoModal && <ModalWindowInformation closeInfoModal={setInfomodal} />}
        <div className={styles.informationBlockContent}>
          <h2 className={styles.informationBlockTitle}>
            {" "}
            Присоединяйтесь к E-Mentor сейчас
          </h2>
          <div className={styles.informationBlockText}>
            Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы
            подарим вам дополнительные лекции по любому направлению бесплатно!
          </div>
          <div
            className={styles.informationBlockButton}
            onClick={() => {
              setInfomodal(true);
            }}
          >
            {ButtonUniversal(
              "var(--c-orange)",
              "var(--c-white)",
              "0px 20px",
              "Все курсы",
              "",
              "var(--c-orange)",
              "67px"
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default InformationBlock;

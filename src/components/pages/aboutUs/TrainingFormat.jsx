import classNames from "classnames";
import React from "react";
import { useState } from "react";
import Images from "../../../assets/photo/Images";
import { ButtonUniversal } from "../../button/ButtonUniversal";
import TrainingBlockResp from "./trainingBlockResp/TrainingBlockResp";
import styles from "./trainingFormat.module.scss";

export const TrainingFormat = () => {
  const [mouseBorderState, setMouseBorderState] = useState(false);
  function trainingBorderHover() {
    setMouseBorderState((mouseBorderState) => !mouseBorderState);
  }
  // let toggleMouseBorderClass = mouseBorderState ? "activeBorder" : "null";

  // Open menu and Close Button===================================
  const [open, setOpen] = useState("trainingMenu");
  const [togglecloseButton, setTogglecloseButton] = useState("");
  const [openButtonToglerTrainingMenu, setopenButtonToglerTrainingMenu] =
    useState("");
  function openMenu() {
    setOpen((open) => !open);
    setTogglecloseButton((togglecloseButton) => !togglecloseButton);
    setopenButtonToglerTrainingMenu(
      (openButtonToglerTrainingMenu) => !openButtonToglerTrainingMenu
    );
  }

  // const closeTrainingMenu()
  return (
    <div className={styles.trainingFormatWrapper}>
      <div className={styles.trainingFormatContainer}>
        {/* Image Block====================================== */}
        <div
          // className={styles.trainingFormatImageBlock ${toggleMouseBorderClass}}
          className={styles.trainingFormatImageBlock}
          onMouseEnter={trainingBorderHover}
          onMouseLeave={trainingBorderHover}
        >
          <div
            // className={`${styles.trainingFormatBorder}  ${styles.toggleMouseBorderClass}`}
            // TODO Як динамічно передати другий клас______________________

            className={classNames(styles.trainingFormatBorder, {
              [styles.activeBorder]: mouseBorderState,
            })}
          >
            <img src={Images.imageBorder2} alt="border" />
          </div>
          <div className={styles.trainingFormatimage}>
            <img src={Images.imageTraining} alt="training" />
          </div>
        </div>

        {/* Text block=================================== */}

        <div className={styles.textBlockContainer}>
          <div className={styles.textBlockTitle}>
            <h2 className={styles.textTitle}>Выбирайте свой формат обучения</h2>
          </div>
          <div className={styles.textBlockDescription}>
            Смотрите видео-лекции в удобное для вас время, обучайтесь{" "}
            <p> на тренажере, участвуйте в интенсивных воркшопах</p> с командой
            или проходите курс с гибким расписанием.{" "}
            <p> На нашей платформе каждый найдет подходящий формат.</p>
          </div>
          <div className={styles.textBlocButton} onClick={openMenu}>
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
          {/* Open Menu===================== */}
          <nav className={styles.trainingNavigation}>
            <div
              className={classNames(styles.trainingMenu, {
                [styles.menuActive]: open,
              })}
            >
              <TrainingBlockResp></TrainingBlockResp>
              <div
                className={classNames(styles.buttonToglerTrainingMenu, {
                  [styles.buttonToglerTrainingMenuActive]:
                    openButtonToglerTrainingMenu,
                })}
              >
                {/* Toggler===================================== */}
                <div className={styles.closeButton} onClick={openMenu}>
                  <div
                    className={classNames(styles.closeButtonToggle, {
                      [styles.openToggle]: togglecloseButton,
                    })}
                  ></div>
                  <div
                    className={classNames(styles.closeButtonToggle, {
                      [styles.openToggle]: togglecloseButton,
                    })}
                  ></div>
                  <div
                    className={classNames(styles.closeButtonToggle, {
                      [styles.openToggle]: togglecloseButton,
                    })}
                  ></div>
                </div>
              </div>
              {/* <button className={styles.closeButton} onClick={openMenu}>
                
                X
              </button> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

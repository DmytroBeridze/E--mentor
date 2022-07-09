import Navbar from "../../navbar/Navbar";
import "./main.scss";
import Images from "../../../assets/photo/Images.jsx";
import { ButtonUniversal } from "../../button/ButtonUniversal";
import { useState } from "react";
import Modal from "../../modalWindow/Modal";
import { ModalSubmodal } from "../../modalWindow/ModalSubmodal";
// import img1 from "../../../assets/photo/1.jpg";
// import Imgs from "../../../assets/photo/Imgs";
// import Button from "../../button/Button";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [openSubModal, setOpenSubModal] = useState(false);

  // * Effect when howering over the photo================
  const [mouseState, setmouseState] = useState(false);
  const [mouseState1, setmouseState1] = useState(false);

  function photoHover() {
    setmouseState((mouseState) => !mouseState);
  }
  function photoHover1() {
    const timer = setTimeout(
      () => setmouseState1((mouseState1) => !mouseState1),
      300
    );
  }
  let togglePhotoClass = mouseState ? "photoActive" : "null";
  let togglePhoto1Class = mouseState1 ? "photoActive1" : "null";
  // * Effect when howering photo END================

  return (
    <>
      <div className="mainContainer">
        {/* MODAL Window ++++++++++++++++++++++++++++++++++ */}
        {/* {openSubModal && <ModalSubmodal closeSubModal={setOpenSubModal} />}
        <button onClick={setOpenSubModal}>dfjhdfjjk</button> */}
        {openModal && <Modal closeModal={setOpenModal} />}
        <Navbar></Navbar>
        <div className="mainContentWrapper">
          {/* GridContainer====================================================== */}
          <div className="gridContainer">
            {/* Social icons_______________________ */}
            <div className="social">
              <ul className="socialList">
                <li className="socialList__item">
                  <a href="https://translate.google.com/?hl=ru">
                    <svg
                      className="iconStyle"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 16.4216 3.92234 20.9272 9.08416 21.8337V21.8699C9.64599 21.956 10.2208 22 10.8063 22C10.8389 22 10.8715 21.9999 10.904 21.9996C10.936 21.9999 10.968 22 11 22ZM10.904 21.9996C11.4558 21.995 11.9979 21.9512 12.5284 21.8699V14.3641H15.0965L15.5851 11.2594H12.5284V9.24549C12.5284 8.39591 12.9546 7.56727 14.3237 7.56727H15.7143V4.92406C15.7143 4.92406 14.4528 4.71429 13.2474 4.71429C10.7288 4.71429 9.08416 6.2016 9.08416 8.89306V11.2594H6.28571V14.3641H9.08416V21.8337C9.67585 21.9377 10.2838 21.9943 10.904 21.9996Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </a>
                </li>
                <li className="socialList__item">
                  <a href="https://icomoon.io/app/#/select/image">
                    <svg
                      className="iconStyle"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.28352 0H12.7165C15.966 0 17.5908 0 18.8319 0.632402C19.9237 1.18868 20.8113 2.0763 21.3676 3.16806C22 4.40921 22 6.03398 22 9.28352V12.7165C22 15.966 22 17.5908 21.3676 18.8319C20.8113 19.9237 19.9237 20.8113 18.8319 21.3676C17.5908 22 15.966 22 12.7165 22H9.28352C6.03398 22 4.40921 22 3.16806 21.3676C2.0763 20.8113 1.18868 19.9237 0.632402 18.8319C0 17.5908 0 15.966 0 12.7165V9.28352C0 6.03398 0 4.40921 0.632402 3.16806C1.18868 2.0763 2.0763 1.18868 3.16806 0.632402C4.40921 0 6.03398 0 9.28352 0ZM16.3251 12.1362C16.2326 12.3718 16.2705 12.6043 16.4398 12.8339C16.6556 13.0762 16.8944 13.3226 17.1359 13.5717C17.8503 14.3088 18.5873 15.069 18.8154 15.8138C18.8958 16.2784 18.513 16.4513 18.1244 16.4513L16.0311 16.4857C15.9001 16.5143 15.7475 16.5 15.5733 16.4426C14.97 16.2441 14.5759 15.7682 14.1785 15.2883C13.9235 14.9804 13.6671 14.6707 13.3531 14.4317C13.1967 14.3125 13.0079 14.2313 12.8258 14.3282C12.4145 14.5443 12.4041 14.9601 12.3935 15.3812C12.3855 15.6995 12.3774 16.0209 12.1962 16.2614C11.9568 16.527 11.4927 16.4933 11.114 16.4658C11.0078 16.4581 10.9083 16.4509 10.8224 16.4509C6.90562 16.5914 4.35192 10.9767 3.18496 8.07995C3.04537 7.68855 3.26547 7.49428 3.6593 7.49428L5.89983 7.47715C6.1393 7.51896 6.36658 7.66062 6.45585 7.90771C6.79134 8.72834 8.01256 11.6886 8.76989 11.6886C9.52723 11.6886 9.33773 8.67222 9.08059 8.10595C8.94429 7.91076 8.7127 7.7873 8.38557 7.73569C8.31471 7.72434 8.3284 7.65539 8.42655 7.52903C8.7699 7.08702 10.8742 6.95631 11.7956 7.1759C11.9777 7.22405 12.1558 7.30957 12.2371 7.4989C12.4214 7.93084 12.3791 8.65807 12.3363 9.39434C12.2832 10.3068 12.2293 11.2331 12.6048 11.6285C12.7498 11.6664 12.8292 11.6708 12.9565 11.5682C13.924 10.5926 14.5841 9.07458 15.1236 7.83067C15.1929 7.64781 15.3037 7.55793 15.475 7.51624C15.773 7.51624 16.0954 7.51757 16.4279 7.51895C17.1247 7.52183 17.8656 7.5249 18.517 7.51624C19.5248 7.51624 18.0665 9.58333 17.0835 10.9766C16.7006 11.5195 16.3898 11.96 16.3251 12.1362Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </a>
                </li>
                <li className="socialList__item">
                  <a href="https://translate.google.com/?hl=ru">
                    <svg
                      className="iconStyle"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.632402 3.16805C0 4.40921 0 6.03398 0 9.28352V12.7165C0 15.966 0 17.5908 0.632402 18.8319C1.18868 19.9237 2.0763 20.8113 3.16805 21.3676C4.40921 22 6.03398 22 9.28352 22H12.7165C15.966 22 17.5908 22 18.8319 21.3676C19.9237 20.8113 20.8113 19.9237 21.3676 18.8319C22 17.5908 22 15.966 22 12.7165V9.28352C22 6.03398 22 4.40921 21.3676 3.16805C20.8113 2.0763 19.9237 1.18868 18.8319 0.632402C17.5908 0 15.966 0 12.7165 0H9.28352C6.03398 0 4.40921 0 3.16805 0.632402C2.0763 1.18868 1.18868 2.0763 0.632402 3.16805ZM11 14.9286C13.1697 14.9286 14.9286 13.1697 14.9286 11C14.9286 8.83031 13.1697 7.07143 11 7.07143C8.83031 7.07143 7.07143 8.83031 7.07143 11C7.07143 13.1697 8.83031 14.9286 11 14.9286ZM13.3571 11C13.3571 12.3018 12.3018 13.3571 11 13.3571C9.69819 13.3571 8.64286 12.3018 8.64286 11C8.64286 9.69819 9.69819 8.64286 11 8.64286C12.3018 8.64286 13.3571 9.69819 13.3571 11ZM3.65668 5.7169C3.14286 6.72534 3.14286 8.04547 3.14286 10.6857V11.3143C3.14286 13.9545 3.14286 15.2747 3.65668 16.2831C4.10866 17.1701 4.82985 17.8913 5.7169 18.3433C6.72534 18.8571 8.04547 18.8571 10.6857 18.8571H11.3143C13.9545 18.8571 15.2747 18.8571 16.2831 18.3433C17.1701 17.8913 17.8913 17.1701 18.3433 16.2831C18.8571 15.2747 18.8571 13.9545 18.8571 11.3143V10.6857C18.8571 8.04547 18.8571 6.72534 18.3433 5.7169C17.8913 4.82985 17.1701 4.10866 16.2831 3.65668C15.2747 3.14286 13.9545 3.14286 11.3143 3.14286H10.6857C8.04547 3.14286 6.72534 3.14286 5.7169 3.65668C4.82985 4.10866 4.10866 4.82985 3.65668 5.7169ZM10.6857 4.71429H11.3143C12.6603 4.71429 13.5754 4.71551 14.2827 4.7733C14.9716 4.82958 15.3239 4.93161 15.5697 5.05684C16.1611 5.35815 16.6418 5.83895 16.9432 6.43032C17.0684 6.67609 17.1704 7.02841 17.2267 7.71734C17.2845 8.42463 17.2857 9.33966 17.2857 10.6857V11.3143C17.2857 12.6603 17.2845 13.5754 17.2267 14.2827C17.1704 14.9716 17.0684 15.3239 16.9432 15.5697C16.6418 16.1611 16.1611 16.6418 15.5697 16.9432C15.3239 17.0684 14.9716 17.1704 14.2827 17.2267C13.5754 17.2845 12.6603 17.2857 11.3143 17.2857H10.6857C9.33966 17.2857 8.42463 17.2845 7.71735 17.2267C7.02841 17.1704 6.67609 17.0684 6.43032 16.9432C5.83895 16.6418 5.35815 16.1611 5.05684 15.5697C4.93161 15.3239 4.82958 14.9716 4.7733 14.2827C4.71551 13.5754 4.71429 12.6603 4.71429 11.3143V10.6857C4.71429 9.33966 4.71551 8.42463 4.7733 7.71734C4.82958 7.02841 4.93161 6.67609 5.05684 6.43032C5.35815 5.83895 5.83895 5.35815 6.43032 5.05684C6.67609 4.93161 7.02841 4.82958 7.71735 4.7733C8.42463 4.71551 9.33966 4.71429 10.6857 4.71429ZM16.5 6.67857C16.5 7.32948 15.9723 7.85714 15.3214 7.85714C14.6705 7.85714 14.1429 7.32948 14.1429 6.67857C14.1429 6.02766 14.6705 5.5 15.3214 5.5C15.9723 5.5 16.5 6.02766 16.5 6.67857Z"
                        fill="#FDFDFD"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Photo1_______________________ */}

            <div className="mainImageOneWrap ">
              <div className="ImageOneWrap">
                <img
                  src={Images.imageBorder}
                  alt="photo2"
                  className="imageBorder"
                />
              </div>
              <div
                className={`mainImageOne  ${togglePhoto1Class}`}
                onMouseEnter={photoHover1}
                onMouseLeave={photoHover1}
              >
                <img src={Images.image1} alt="photo1" className="image" />
              </div>
            </div>
            <div className="mainLogBlock">
              <h1>Образовательная онлайн-платформа</h1>
              <div className="mainDescription">
                Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и
                многим другим направлениям
              </div>
              {/* Button______________________ */}

              <div
                className="testEffect"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                {ButtonUniversal(
                  "var(--c-orange)",
                  "var(--c-white)",
                  "0px 20px",
                  "Опитування",
                  "50px 0 0 170px",
                  "var(--c-orange)",
                  "73px"
                )}
              </div>
            </div>
            {/* Photo2______________________ */}
            <div className="mainImageTwoWrap">
              <div
                className={`mainImageTwo ${togglePhotoClass} `}
                onMouseEnter={photoHover}
                onMouseLeave={photoHover}
              >
                <img src={Images.image2} alt="photo2" className="image" />
              </div>

              <img
                src={Images.imageBorder}
                alt="photo2"
                className="imageBorder2"
              />

              <div className="ScrollDown">
                <div className="arrow">
                  <svg
                    className="iconStyleArrow"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 569 1024"
                  >
                    <g id="icomoon-ignore"></g>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="113.7778"
                      stroke="#000"
                      d="M284.444 967.111l-227.556-234.894M284.444 967.111l227.556-234.894M284.444 967.111v-910.222"
                    ></path>
                  </svg>
                </div>
                <div>Листайте вниз</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;

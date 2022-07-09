import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../../../assets/photo/Images";
import { ButtonUniversal } from "../../../button/ButtonUniversal";
import "./teachersBlockImages.scss";

export const TeachersBlockImages = () => {
  const [mouseState, setmouseState] = useState(false);
  const [mouseState2, setmouseState2] = useState(false);
  const [mouseState3, setmouseState3] = useState(false);
  const [mouseState4, setmouseState4] = useState(false);
  const [mouseState5, setmouseState5] = useState(false);
  const [mouseState6, setmouseState6] = useState(false);

  function addPhotoStyle() {
    setmouseState((mouseState) => !mouseState);
  }
  function addPhotoStyle2() {
    setmouseState2((mouseState) => !mouseState);
  }
  function addPhotoStyle3() {
    setmouseState3((mouseState) => !mouseState);
  }
  function addPhotoStyle4() {
    setmouseState4((mouseState) => !mouseState);
  }
  function addPhotoStyle5() {
    setmouseState5((mouseState) => !mouseState);
  }
  function addPhotoStyle6() {
    setmouseState6((mouseState) => !mouseState);
  }
  let toggleImageClass = mouseState ? "activeClass" : "null";
  let toggleImageClass2 = mouseState2 ? "activeClass2" : "null";
  let toggleImageClass3 = mouseState3 ? "activeClass3" : "null";
  let toggleImageClass4 = mouseState4 ? "activeClass4" : "null";
  let toggleImageClass5 = mouseState5 ? "activeClass5" : "null";
  let toggleImageClass6 = mouseState6 ? "activeClass6" : "null";

  // Переключення на сторінку Lectures кнопкою______________

  return (
    // <div className="teacherContainer">
    <div className="contentContainer">
      <div className="teacherDesc">
        <h2 className="teacherTitle">Учитесь у лучших</h2>
        <div className="teacherContent">
          Наши преподаватели – профессионалы, которые добились успеха в своей
          области. Лид-дизайнеры известных студий, маркетологи крупнейших
          компаний, редакторы популярных медиа: получайте опыт из первых рук, в
          любое время.{" "}
          <p>
            Кураторы курсов – наши лучшие выпускники, будут помогать и
            поддерживать вас на протяжении всего обучения.
          </p>{" "}
        </div>
        <div className="teacherButton">
          {/* Button______________________ */}
          <Link to="/lectures">
            <div
              className="testEffect"
              onClick={() => {
                // openLectures(true)
              }}
            >
              {ButtonUniversal(
                "var(--c-green)",
                "var(--c-white)",
                "0px 20px",
                "Все направления",
                "",
                "var(--c-green)",
                "95px"
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className="imageGridContainer">
        {/* Image 1____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper ${toggleImageClass}`}
            onMouseEnter={addPhotoStyle}
            onMouseLeave={addPhotoStyle}
          >
            <a href="https://pxhere.com/ru/photo/1172569">
              <img src={Images.image3} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Катя, ведущий дизайнер TailGroup</div>
        </div>
        {/* Image 2____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper2 ${toggleImageClass2}`}
            onMouseEnter={addPhotoStyle2}
            onMouseLeave={addPhotoStyle2}
          >
            <a href="https://www.istockphoto.com/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-gm513395379-47864272">
              <img src={Images.image4} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Марина, маркетолог Headers Market</div>
        </div>
        {/* Image 3____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper3 ${toggleImageClass3}`}
            onMouseEnter={addPhotoStyle3}
            onMouseLeave={addPhotoStyle3}
          >
            <a href="https://www.pikist.com/free-photo-soixb/ru">
              <img src={Images.image5} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Сава, PR-менеджер Central Media</div>
        </div>
        {/* Image 4____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper4 ${toggleImageClass4}`}
            onMouseEnter={addPhotoStyle4}
            onMouseLeave={addPhotoStyle4}
          >
            <a href="https://create.vista.com/ru/unlimited/stock-photos/295730445/stock-photo-selective-focus-handsome-man-sunglasses/">
              <img src={Images.image6} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Паша, основатель LeadCompany</div>
        </div>

        {/* Image 5____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper5 ${toggleImageClass5}`}
            onMouseEnter={addPhotoStyle5}
            onMouseLeave={addPhotoStyle5}
          >
            <a href="https://www.istockphoto.com/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D1%85-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%BE-%D0%B2-%D1%82%D1%80%D1%83%D1%81%D0%B8%D0%BA%D0%B8-%D0%B8-%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%B0-%D0%BA%D1%83%D1%80%D1%82%D0%BA%D0%B0-%D0%B4%D0%B6%D0%B8%D0%BD%D1%81%D1%8B-gm464988009-33177528">
              <img src={Images.image7} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Саша, главный редактор Just Journal</div>
        </div>

        {/* Image 6____________________________  */}
        <div className="gridContentWrapper">
          <div
            className={`imageWrapper6 ${toggleImageClass6}`}
            onMouseEnter={addPhotoStyle6}
            onMouseLeave={addPhotoStyle6}
          >
            <a href="https://create.vista.com/ru/unlimited/stock-photos/301573128/stock-photo-smiling-man-sunglasses-sitting-clenched/">
              <img src={Images.image8} alt="im" className="imageTeacher" />
            </a>
          </div>
          <div className="imageTitle">Лёня, ведущий разработчик Ymail</div>
        </div>
      </div>
    </div>
    // </div>
  );
};

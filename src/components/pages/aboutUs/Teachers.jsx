import "./teachers.scss";
import { TeachersBlockImages } from "./TeachersBlockImages/TeachersBlockImages";

const Teachers = ({ image }) => {
  // Ефект при наведенні на блоки з фото_______________________
  // const [mouseState, setmouseState] = useState(false);

  // function addStyle(image) {
  //   setmouseState((mouseState) => !mouseState);

  //   console.log(toggleClass);
  // }
  // let toggleClass = mouseState ? "active" : "null";

  return (
    <>
      <div className="teacherContainer">
        <div className="lecturesWrapper">
          <div className="lecturesNumbers">
            <div className="number">100+</div>
            <div className="numberDesc">
              теоретических и практических курсов для разного уровня
            </div>
          </div>
          <div className="lecturesNumbers">
            <div className="number">3 000</div>
            <div className="numberDesc">
              часов видео-лекций и вебинаров от лучших преподавателей
            </div>
          </div>
          <div className="lecturesNumbers">
            <div className="number">15</div>
            <div className="numberDesc">
              направлений обучения востребованным профессиям
            </div>
          </div>
          <div className="lecturesNumbers">
            <div className="number">2 000</div>
            <div className="numberDesc">
              учеников уже занимаются на нашей платформе
            </div>
          </div>
        </div>
        <TeachersBlockImages />
      </div>
      {/* <div
        className={`square ${toggleClass}`}
        onMouseEnter={addStyle}
        onMouseLeave={addStyle}
      >
        <img src={image} alt="" className="photoTest" />
      </div>
      <div
        className={`square ${toggleClass}`}
        onMouseEnter={addStyle}
        onMouseLeave={addStyle}
      >
        <img src={image} alt="" className="photoTest" />
      </div> */}
      {/* Приймання фото атрибутом з About us==================================== */}
      {/* <div
        className={`square2 ${toggleClass}`}
        onMouseEnter={addStyle}
        onMouseLeave={addStyle}
      >
        <img src={image} alt="" className="photoTest" />
      </div> */}
    </>
  );
};
export default Teachers;

//
//
//

// import styles from "./main.module.scss";

// const Main = () => {
//   const addStyle = () => {
//     console.log("1234");
//   };
//   return (
//     <>
//       <section>

//         <div className={styles.square} onMouseOver={addStyle}></div>
//       </section>
//     </>
//   );
// };
// export default Main;

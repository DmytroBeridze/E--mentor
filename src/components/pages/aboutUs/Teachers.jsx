import { useState } from "react";
import "./teachers.scss";

const Teachers = () => {
  // Ефект при наведенні на блоки з фото_______________________
  const [mouseState, setmouseState] = useState(false);

  function addStyle() {
    setmouseState((mouseState) => !mouseState);

    console.log(toggleClass);
  }
  let toggleClass = mouseState ? "active" : "null";

  return (
    <>
      <div
        className={`square ${toggleClass}`}
        onMouseEnter={addStyle}
        onMouseLeave={addStyle}
      ></div>
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

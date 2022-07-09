import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./trainingBlockResp.module.scss";

function TrainingBlockResp() {
  const URL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const [test, setTest] = useState([]);

  useEffect(() => {
    Axios.get(URL)
      .then((res) => {
        console.log("Getting from::::", res.data.drinks);
        setTest(res.data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);
  const arr = test.map((data, id) => {
    return (
      <li key={id}>
        <div>{data.strDrink}</div>
        <div>{data.idDrink}</div> <img src={data.strDrinkThumb} alt="image1" />
      </li>
    );
  });

  return (
    <div className={styles.trainingResp}>
      <ul className={styles.trainingList}>{arr}</ul>
    </div>
  );
}
export default TrainingBlockResp;

// ! Робочий приклад=========================================================
// function TrainingBlockResp() {
//   const URL =
//     "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log("Getting from::::", res.data);
//         setData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   const arr = data.map((data, id) => {
//     return (
//       <ul className={styles.trainingList}>
//         <li>{data.id}</li>
//         <li>{data.title}</li>
//         <li>{data.body}</li>
//       </ul>
//     );
//   });

//   return (
//     <div className={styles.trainingResp}>
//       {arr}
//       {/* <ul className={styles.trainingList}>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul> */}
//     </div>
//   );
// }
// export default TrainingBlockResp;

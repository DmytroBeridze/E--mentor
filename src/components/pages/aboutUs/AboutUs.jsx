import styles from "./aboutAs.module.scss";

import Teachers from "./Teachers";
import Main from "./Main";

const AboutUs = () => {
  return (
    <>
      <div className={styles.mainPage}>
        <Main> </Main>
        <div className={styles.place}>
          <Teachers />
          <Teachers />
        </div>
      </div>
    </>
  );
};
export default AboutUs;

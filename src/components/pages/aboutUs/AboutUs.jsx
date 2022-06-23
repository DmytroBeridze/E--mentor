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
        <Teachers />
        <Teachers />
        <Teachers />
        <Teachers />
      </div>
    </>
  );
};
export default AboutUs;

import { FooterItemsTeaching } from "./FooterItemsTeaching";
import { FooterItemsAboutus } from "./FooterItemsAboutus";
import { FooterItemsContacts } from "./FooterItemsContacts";
import classnames from "classnames";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContentWrapper}>
          {/* Footerlogo________________________________ */}
          <div className={styles.footerLogo}>E-MENTOR</div>

          {/* Teaching list_______________________________ */}
          <div className={styles.footerTeaching}>
            <ul className={styles.footerList}>
              <h3>Обучение</h3>
              {FooterItemsTeaching.map((item, index) => {
                return (
                  //   <li key={index} className={styles.{item.cName}}>
                  <li key={index}>
                    <a href={item.url}>{item.title} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* About us list_______________________ */}
          <div className={styles.footerTeaching}>
            <h3>О нас</h3>
            <ul className={styles.footerList}>
              {FooterItemsAboutus.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url}>{item.title} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contacts list_______________________ */}
          <div className={styles.footerTeaching}>
            <h3>Контакты</h3>
            <ul className={styles.footerList}>
              {FooterItemsContacts.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url}>{item.title} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Question____________________ */}
          <div className={styles.footerQuestion}>Question</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
// className={classnames(styles.[item.cName])}

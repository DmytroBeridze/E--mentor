import React from "react";
import styles from "./header.module.scss";
import logo from "../../assets/icons/logo.png";
import mentor from "../../assets/icons/mentor.png";
import { Link, Route, Routes } from "react-router-dom";
// Сторінки____________________________________
import AboutUs from "../pages/aboutUs/AboutUs";
import Platform from "../pages/Platform";
import Courses from "../pages/Courses";
import Lectures from "../pages/Lectures";
import Tariffs from "../pages/Tariffs";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";

// let menus = [
//   " О нас",
//   "Платформа",
//   "Курсы",
//   "Лекции",
//   "Тарифы",
//   "Блог",
//   "Контакты",
// ];

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navWrapper}>
          <div className={styles.logoWrap}>
            <img src={logo} className={styles.logo} alt="" />
            <img src={mentor} alt="" />
          </div>
          {/* Navigation menu__________________________________ */}
          <nav className={styles.navigation}>
            <div className={styles.navigationList}>
              <Link className={styles.navigationListItem} to="/">
                Главная
              </Link>
              <Link className={styles.navigationListItem} to="/platform">
                Платформа
              </Link>
              <Link className={styles.navigationListItem} to="/courses">
                Курсы
              </Link>
              <Link className={styles.navigationListItem} to="/lectures">
                Лекции
              </Link>
              <Link className={styles.navigationListItem} to="/tariffs">
                Тарифы
              </Link>
              <Link className={styles.navigationListItem} to="/blog">
                Блог
              </Link>
              <Link className={styles.navigationListItem} to="/contacts">
                Контакты
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default Header;

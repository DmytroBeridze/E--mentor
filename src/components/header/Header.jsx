import React from "react";
import "./header.scss";
import logo from "../../assets/icons/logo.png";
import mentor from "../../assets/icons/mentor.png";
import { Link, Route, Routes } from "react-router-dom";

import { useState } from "react";

// Сторінки____________________________________
import AboutUs from "../pages/aboutUs/AboutUs";
import Platform from "../pages/Platform";
import Courses from "../pages/Courses";
import Lectures from "../pages/Lectures";
import Tariffs from "../pages/Tariffs";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import Navbar from "../navbar/Navbar";

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
  const [active, setActive] = useState("navigationList");
  const [toggleIcon, setToggleicon] = useState("toggler");
  console.log(toggleIcon);
  const navToggle = () => {
    active === "navigationList"
      ? setActive(" navigationList navActive")
      : setActive("navigationList");

    toggleIcon === "toggler"
      ? setToggleicon("toggler open")
      : setToggleicon("toggler");
  };

  // Toggler icon animation___________

  return (
    <>
      <div className="header">
        <div className="navWrapper">
          <div className="logoWrap">
            <img src={logo} className="logo" alt="" />
            <img src={mentor} alt="" />
          </div>
          {/* Navigation menu__________________________________ */}
          <nav className="navigation">
            {/* <div className={styles.navigationList}> */}
            <div
              // className={classNames(styles.navigationList, styles.navActive)}
              className={active}
            >
              <Link className="navigationListItem" to="/">
                Главная
              </Link>
              <Link className="navigationListItem" to="/platform">
                Платформа
              </Link>
              <Link className="navigationListItem" to="/courses">
                Курсы
              </Link>
              <Link className="navigationListItem" to="/lectures">
                Лекции
              </Link>
              <Link className="navigationListItem" to="/tariffs">
                Тарифы
              </Link>
              <Link className="navigationListItem" to="/blog">
                Блог
              </Link>
              <Link className="navigationListItem" to="/contacts">
                Контакты
              </Link>
            </div>
            {/* TOGGLER_____________________________ */}
            <div onClick={navToggle} className={toggleIcon}>
              <div className="toggle"></div>
              <div className="toggle "></div>
              <div className="toggle"></div>
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

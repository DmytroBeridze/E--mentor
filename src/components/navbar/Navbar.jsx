import React, { Component } from "react";

import { MenuItems } from "./MenuItems";

import "./navbar.scss";

class Navbar extends Component {
  // Burger click_____________
  // state = { clicked: false };
  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };

  render() {
    return (
      // NAvbar_____
      <nav className="NavbarItems">
        {/* Burger_______________ */}
        {/* <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div> */}

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="li">
                <a href={item.url} className={item.cName}>
                  {" "}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

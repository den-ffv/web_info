import React from "react";
import ShowDate from "../Header/Date/ShowDate";
import "./Menu.scss";

const Menu = ({ active, setMenuActive }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="menu__content">
        {/* <ShowDate /> */}
        <ul>
          <li>
            <a href="/">Головне</a>
          </li>
          <li>
            <a href="/news">Новини</a>
          </li>
          <li>
            <a href="/blog">Блог</a>
          </li>
          <li>
            <a href="/language">Мови</a>
          </li>
        </ul>
        <div className="auth-content">
          <a href="" className="auth-btn log-in">
            log in
          </a>
          <a href="" className="auth-btn sign-in">
            sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;

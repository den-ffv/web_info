import React from "react";
import "./Menu.scss";

const Menu = ({ active, setMenuActive }) => {


  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="menu__content">
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
        <div className="social-networks">
            <ul>
              <li><a href="">Inst</a></li>
              <li><a href="">Tw</a></li>
              <li><a href="">Tg</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

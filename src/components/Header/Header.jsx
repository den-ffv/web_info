import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Blog from "../../pages/Blog";
import Language from "../../pages/Language";
import "./Header.scss";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header-wrapper">
            <div className="header__btn">
              <button onClick={() => setMenuActive(!menuActive)}></button>
            </div>

            <div className="logo-content">
              <p className="logo">Logo</p>
            </div>
          </div>

          <div className="header-wrapper">
            <div className="nav">
              <ul>
                <li>
                  <Link className="nav__link" to="/">Головне</Link>
                </li>
                <li>
                  <Link className="nav__link" to="/news">Новини</Link>
                </li>
                <li>
                  <Link className="nav__link" to="/blog">Блог</Link>
                </li>
                <li>
                  <Link className="nav__link" to="/language">Мови</Link>
                </li>
              </ul>
            </div>

            <div className="auth-content">
              <a href="" className="auth-btn log-in">log in</a>
              <a href="" className="auth-btn sign-in">sign in</a>
            </div>
          </div>
          <Menu active={menuActive} setMenuActive={setMenuActive} />
        </div>
        
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </>
  );
}

export default Header;

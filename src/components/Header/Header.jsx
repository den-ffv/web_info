import React from "react";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Blog from "../../pages/Blog";
import Language from "../../pages/Language";
import "./Header.scss";
import Footer from "../Footer/Footer";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__content">
          
            <div className="header__btn">
              <button onClick={() => setMenuActive(!menuActive)}></button>
            </div>

            <div className="logo-content">
              <p className="logo">Tech Talk</p>
            </div>
       

         
            <div className="nav">
              <ul>
                <li>
                  <NavLink className="nav__link" to="/">
                    Головне
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__link" to="/news">
                    Новини
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__link" to="/blog">
                    Блог
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__link" to="/language">
                    Мови
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="auth-content">
              <a href="" className="auth-btn sign-up">
                Реє
              </a>
            </div>
          
          <Menu active={menuActive} setMenuActive={setMenuActive} />
        </div>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/language" element={<Language />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default Header;

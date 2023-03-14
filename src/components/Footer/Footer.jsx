import React from "react";
import './Footer.scss'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo-content">
          <p className="logo">Tech Talk</p>
        </div>
        <div className="social-networks">
            <ul>
              <li><a href="">Instagran</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Telegram</a></li>
            </ul>
        </div>
        <p>@всі права захищені</p>
      </div>
    </>
  );
}

export default Footer;

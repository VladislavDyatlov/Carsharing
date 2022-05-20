import React from "react";
import "./Footer.scss";

function Footer({ eng }) {
  return (
    <div className="footer">
      <div className="footer__two">
        <a href="tel:84952342244" className="footer__phone">
          8 (495) 234-22-44
        </a>
        <small className="footer__down">
          &copy; 2016-2019 «{eng ? "Нужен Драйв" : "Need For Drive"}»
        </small>
      </div>
    </div>
  );
};

export default Footer;

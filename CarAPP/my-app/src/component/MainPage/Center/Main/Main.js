import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

function Main({ eng }) {
  return (
    <div className="main">
      <div className="main__two">
        <h1 className="main__container">
          <p className="main__p1">Каршеринг</p>
          <p className="main__p2">{eng ? "Нужен Драйв" : "Need For Drive"} </p>
        </h1>
        <p className="main__p3">Поминутная аренда авто твоего города</p>
      </div>
      <Link to="/booking/location" className="main__button order__total-button">
        Забронировать
      </Link>
    </div>
  );
};

export default Main;


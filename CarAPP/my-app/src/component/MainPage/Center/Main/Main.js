import React from "react";
import "./Main.scss";
import { Link } from "react-router-dom";

function Main(){
  return (
    <div className="main">
      <div className="main__two">  
        <h1 className="main__container">
          <p className="main__p1">Каршеринг</p>
          <p className="main__p2">Need for drive</p>
        </h1>
        <p className="main__p3">Поминутная аренда авто твоего города</p>
      </div>
      <Link to='/booking' className="main__button order__total-button">Забронировать</Link>
    </div>
  );
};

export default Main;


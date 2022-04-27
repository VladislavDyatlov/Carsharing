import React from "react";
import "./Main.scss";

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
      <a href='#' className="main__button order__total-button">Забронировать</a>
    </div>
  );
};

export default Main;


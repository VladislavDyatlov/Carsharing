import React from "react";
import "./Container.scss";

 const Container = () => {
  return (
    <div className="container">
      <div className="container__mains">
        <div className="container__title">Ваш заказ:</div>
        <div className="container__booking">
          <p>Пункт выдачи</p>
          <p>Ульяновск, Нариманова 32</p>
        </div>
        <div className="container__price">
          <p>Цена: </p>
          <p> от 8 000 до 12 000 ₽</p>
        </div>
        <div className="container__button">
            <p>Выбрать модель</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
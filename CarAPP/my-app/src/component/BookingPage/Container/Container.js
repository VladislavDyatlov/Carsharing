import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Container.scss"; 
import {useSelector} from 'react-redux'
import Model from './model/model'

 const Container = ({path, text, active, actives, activ, disable, button}) => {
 
  const items = useSelector((state) => state.cart.itemsInCart);

  const item = useSelector(state => state.option.IntemsInOption)
  const [model, setModel] = useState(false)

  const ModelActive = () =>{
    if (path === "/booking/order") {
      return setModel(true);
    }
    return null;
  } 

  return (
    <div className="container">
      <div className="container__mains">
        <div className="container__title">Ваш заказ:</div>
        <div className="container__booking">
          <p>Пункт выдачи</p>
          <p></p>
          <p>Ульяновск, Нариманова 42</p>
        </div>
        <div className="container__price">
          <div>
            <ul class="ingredients">
              {items.length > 0 ? (
                <div>
                  <li>
                    Модель
                    <span class="value">
                      {items.map((car) => car.car)},{" "}
                      {items.map((car) => car.model)}
                    </span>
                  </li>
                  <li>
                    Длительность аренды<span class="value">1д.2ч</span>
                  </li>
                  <li>
                    Цвет
                    <span class="value">{item.map((color) => color.tex)}</span>
                  </li>
                  <li>
                    Тариф
                    <span class="value">{item.map((pay) => pay.pays)}</span>
                  </li>
                </div>
              ) : null}
              {item.length > 0 ? (
                <div>
                  <li>
                    Полный бак<span class="value">{active ? "Нет" : "Да"}</span>
                  </li>
                  <li>
                    Детское кресло
                    <span class="value">{activ ? "Да" : "Нет"}</span>
                  </li>
                  <li>
                    Правый руль
                    <span class="value">{actives ? "Да" : "Нет"}</span>
                  </li>
                </div>
              ) : null}
            </ul>
          </div>
          <p>
            <strong> Цена:</strong> {items.map((car) => car.price)}
          </p>
        </div>
        <Model model={model} setModel={setModel} />
        <div
          className={`container__${button ? "buttons" : "button"} ${
            disable ? "" : "state"
          }`}
        >
          <Link onClick={() => ModelActive()} to={path}>
            {text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Container;
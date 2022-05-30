import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Container.scss"; 
import {useSelector} from 'react-redux'
import Model from './model/model'

 const Container = ({path, text, disable, button}) => {
 
  const items = useSelector((state) => state.cart.itemsInCart);

  const item = useSelector(state => state.option.IntemsInOption)
  const pice = useSelector(state => state.option.IntemsInOptions)
  const active = useSelector(state => state.option.IntemsInChoice)
  const actives = useSelector(state => state.option.IntemsInChoices) 
  const activ = useSelector(state => state.option.IntemsInChoic)
  const location = useSelector(state => state.location.itemsInLocation)
  const locations = useSelector(state => state.location.itemsInLocations)
  const date = new Date(useSelector((state) => state.option.ItemsInDate));
  const dates = new Date(useSelector((state) => state.option.ItemsInDates));
  const [model, setModel] = useState(false)

  const TotalDay = (dates - date) / (60 * 60 * 24 * 1000)
  const TotalPay = pice.price * TotalDay 
  const TotalOne = active ? active.text : 0
  const TotalTwo = actives ? actives.text : 0
  const TotalThree = activ ? activ.text : 0;

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
          <p className="container__p"></p>
          <p>
            {locations} {location}
          </p>
        </div>
        <div className="container__price">
          <div>
            <ul class="ingredients">
              {items && (
                <div>
                  <li>
                    Модель
                    <span class="value">
                      {items.car}, {items.model}
                    </span>
                  </li>
                </div>
              )}
              {item && (
                <div>
                  <li>
                    Длительность аренды
                    <span class="value">{TotalDay ? TotalDay : 0}д</span>
                  </li>
                  <li>
                    Цвет
                    <span class="value">{item.tex}</span>
                  </li>
                </div>
              )}
              {pice && (
                <div>
                  <li>
                    Тариф
                    <span class="value">{pice.pays}</span>
                  </li>
                </div>
              )}
              <li>
                Полный бак<span class="value">{active ? "Да" : "Нет"}</span>
              </li>
              <li>
                Детское кресло
                <span class="value">{activ ? "Да" : "Нет"}</span>
              </li>
              <li>
                Правый руль
                <span class="value">{actives ? "Да" : "Нет"}</span>
              </li>
            </ul>
          </div>
          <p>
            <strong> Цена:</strong>{" "}
            {TotalPay
              ? TotalPay + TotalOne + TotalTwo + TotalThree
              : items.price}{" "}
            ₽
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
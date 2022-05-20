import React, {useState, useEffect} from "react";
import Container from "../Container/Container";
import {useDispatch} from 'react-redux';
import {setItemInOption} from '../../../redux/option/reducer'
import {setItemInDisabls} from '../../../redux/disable/reducer'
import {setItemInDisables} from '../../../redux/disable/reducer'
import {useSelector} from 'react-redux'
import './Option.scss';

 const Colors = [
  {
    id: 1,
    tex: 'Любой',
    color: 'Цвет'
  },
  {
    id: 2,
    tex: 'Красный',
    color: 'Цвет'
  },
  {
    id: 3,
    tex: 'Голубой',
    color: 'Цвет'
  }
]

const Pay = [
  {
    id: 1,
    text: 'Поминутно, 7 ₽/сутки',
    pay: 'Тариф',
    pays: 'Поминутно'
  },
  {
    id: 2,
    text: 'На сутки, 1999 ₽/сутки',
    pay: 'Тариф',
    pays: 'На сутки'
  }
]

function Option(){ 

  const dispath = useDispatch();
  const [active, setActive] = useState(true)
  const [actives, setActives] = useState(true)
  const [activ, setActiv] = useState(true)
  const disabl = useSelector(state => state.disable.itemsInDisabls)
  const disables = useSelector(state => state.disable.itemsInDisables)

  const payClick = (pay) => {
    dispath(setItemInOption(pay))
  }

  const colorClick = (color) =>{
    dispath(setItemInOption(color))
  }

  const Disables = () =>{
    dispath(setItemInDisabls(true))
  }

  const Disable = () =>{
    dispath(setItemInDisables(true))
  }

    return (
      <>
        <div>
          <section className="options-color">
            <div className="options-color__container">
              <span className="options-color__heading">Цвет</span>
              <div className="options-color__list">
                {Colors.map((color) => (
                  <div
                    onClick={Disables}
                    className={`buy ${disabl ? "state" : ""}`}
                  >
                    <input
                      class="custom-radio"
                      name="color"
                      type="radio"
                      id="color-green"
                      value="green"
                    />
                    <label
                      onClick={() => colorClick(color)}
                      className={`options-color__item }`}
                    >
                      {color.tex}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="options-date-rent">
            <div className="options-date-rent__container">
              <span className="options-date-rent__heading">Дата аренды</span>
              <div className="options-date-rent__form">
                <span>С</span>
                <input
                  type="search"
                  className="options-date-rent__input "
                  placeholder="Введите дату аренды"
                />
              </div>
              <div className="options-date-rent__form">
                <span>По</span>
                <input
                  type="search"
                  className="options-date-rent__input"
                  placeholder="Введите дату и время"
                />
              </div>
            </div>
          </section>
          <section className="options-rate">
            <div className="options-rate__container">
              <span className="options-rate__heading">Тариф</span>
              <ul type="circle" className="options-rate__list">
                {Pay.map((pay) => (
                  <div
                    onClick={Disable}
                    className={`buy ${disables ? "state" : ""}`}
                  >
                    <input id="radioButton" type="radio" />
                    <label
                      onClick={() => payClick(pay)}
                      className="options-rate__item"
                    >
                      {pay.text}
                    </label>
                  </div>
                ))}
              </ul>
            </div>
          </section>
          <section className="options-addons">
            <div className="options-addons__container">
              <span className="options-addons__heading">Доп. услуги</span>
              <ul className="options-addons__list">
                <li
                  onClick={() => setActive(!active)}
                  className="options-addons__item"
                >
                  <input
                    type="checkbox"
                    className="options-addons__input active"
                    id="addons-input-1"
                  />
                  <label>Полный бак, 500₽</label>
                </li>
                <li
                  onClick={() => setActiv(!activ)}
                  className="options-addons__item"
                >
                  <input
                    type="checkbox"
                    className="options-addons__input active"
                    id="addons-input-1"
                  />
                  <label>Детское кресло, 200₽</label>
                </li>
                <li
                  onClick={() => setActives(!actives)}
                  className="options-addons__item"
                >
                  <input
                    type="checkbox"
                    className="options-addons__input active"
                    id="addons-input-1"
                  />
                  <label>Правый руль, 1600₽</label>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Container
          path="/booking/order"
          text="Итого"
          active={active}
          actives={actives}
          activ={activ}
          disable={disables}
        />
      </>
    );
}

export default Option;
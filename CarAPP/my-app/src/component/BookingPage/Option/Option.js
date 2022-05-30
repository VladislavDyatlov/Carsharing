import React, {useEffect} from "react";
import Container from "../Container/Container";
import {useDispatch} from 'react-redux';
import {setItemInOption} from '../../../redux/option/reducer'
import {setItemInOptions} from '../../../redux/option/reducer'
import {setItemInChoices} from '../../../redux/option/reducer'
import {setItemInChoice} from '../../../redux/option/reducer'
import {setItemInChoic} from '../../../redux/option/reducer'
import { setItemInNavigate } from "../../../redux/navigate/navigate";
import {setItemInDisables} from '../../../redux/disable/reducer'
import {setItemDates} from "../../../redux/option/reducer"
import {setItemDate} from "../../../redux/option/reducer"
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
    price: 10080,
    pay: 'Тариф',
    pays: 'Поминутно'
  },
  {
    id: 2,
    text: 'На сутки, 1999 ₽/сутки',
    price:  1999,
    pay: 'Тариф',
    pays: 'На сутки'
  }
]

function Option(){ 

  const dispath = useDispatch();
  const disabl = useSelector(state => state.disable.itemsInDisabls)
  const disables = useSelector(state => state.disable.itemsInDisables)
  const date = useSelector((state) => state.option.ItemsInDate);
  const dates = useSelector((state) => state.option.ItemsInDates);
  

  const payClick = (pay) => {
    dispath(setItemInOptions(pay))
  }

  const colorClick = (color) =>{
    dispath(setItemInOption(color))
  }

  const Disable = () =>{
    dispath(setItemInDisables(true))
  }

  useEffect(() =>{
    dispath(setItemInNavigate(true))
  })
    return (
      <>
        <div>
          <section className="options-color">
            <div className="options-color__container">
              <span className="options-color__heading">Цвет</span>
              <div className="options-color__list">
                {Colors.map((color) => (
                  <div className={`buy ${disabl ? "state" : ""}`}>
                    <input
                      name="color"
                      type="radio"
                      value="green"
                      onClick={() => colorClick(color)}
                    />
                    <label className={`options-color__item }`}>
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
                  type="date"
                  className="options-date-rent__forms"
                  onChange={(el) => dispath(setItemDate(el.target.value))}
                  min="2022-05-29"
                  max="2022-06-29"
                  value={date}
                />
              </div>
              <div className="options-date-rent__form">
                <span>По</span>
                <input
                  type="date"
                  className="options-date-rent__forms"
                  onChange={(el) => dispath(setItemDates(el.target.value))}
                  min="2022-05-29"
                  max="2022-06-29"
                  value={dates}
                />
              </div>
            </div>
          </section>
          <section className="options-rate">
            <div className="options-rate__container">
              <span className="options-rate__heading">Тариф</span>
              <ul type="circle" className="options-rate__list">
                {Pay.map((pay) => (
                  <div onClick={Disable} className={`buy`}>
                    <input
                      name="color"
                      type="radio"
                      value="green"
                      onClick={() => payClick(pay)}
                    />
                    <label className="options-rate__item">{pay.text}</label>
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
                  onClick={() => dispath(setItemInChoice({ text: 500 }))}
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
                  onClick={() => dispath(setItemInChoic({ text: 200 }))}
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
                  onClick={() => dispath(setItemInChoices({ text: 1600 }))}
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
        <Container path="/booking/order" text="Итого" disable={disables} />
      </>
    );
}

export default Option;
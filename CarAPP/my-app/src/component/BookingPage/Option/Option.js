import React from "react";
import './Option.scss';

function Option(){
    return( 
        <div>
        <section className="options-color">
        <div className="options-color__container">
          <span className="options-color__heading">Цвет</span>
          <ul type="circle" className="options-color__list">
            <li className="options-color__item">Любой</li>
            <li className="options-color__item">Красный</li>
            <li className="options-color__item">Голубой</li>
          </ul>
        </div>
      </section>
      <section className="options-date-rent">
      <div className="options-date-rent__container">
        <span className="options-date-rent__heading">Дата аренды</span>
        <div className="options-date-rent__form">
          <span>С</span>
          <input type="search" className="options-date-rent__input " />
        </div>
        <div className="options-date-rent__form">
          <span>По</span>
          <input type="search" className="options-date-rent__input" placeholder="Введите дату и время"/>
        </div>
      </div>
    </section>
    <section className="options-rate">
      <div className="options-rate__container">
        <span className="options-rate__heading">Тариф</span>
        <ul type="circle" className="options-rate__list">
          <li className="options-rate__item">Поминутно, 7 ₽/сутки</li>
          <li className="options-rate__item">На сутки, 1999 ₽/сутки</li>
        </ul>
      </div>
    </section>
    <section className="options-addons">
      <div className="options-addons__container">
        <span className="options-addons__heading">Доп. услуги</span>
        <ul className="options-addons__list">
          <li className="options-addons__item">
            <input
              type="checkbox"
              className="options-addons__input"
              id="addons-input-1"
            />
            <label>
              Полный бак, 500₽
            </label>
          </li>
          <li className="options-addons__item">
            <input
              type="checkbox"
              className="options-addons__input"
              id="addons-input-2"
            />
            <label>
              Детское кресло, 200₽
            </label>
          </li>
          <li className="options-addons__item">
            <input
              type="checkbox" 
              className="options-addons__input"
              id="addons-input-3"
            />
            <label>
              Правый руль, 1600₽
            </label>
          </li>
        </ul>
      </div>
    </section>
        </div>

    )
}

export default Option;
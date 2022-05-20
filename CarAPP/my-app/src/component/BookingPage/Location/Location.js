import React from "react";
import Container from "../Container/Container";

import './Location.scss';

function Location(){

  const disable = true

    return (
      <>
        <div className="content">
          <div className="content__two">
            <form action="" className="form">
              <div className="form__container">
                <div className="form__city">
                  <span className="city">Город</span>
                  <div className="form__list">
                    <input
                      type="search"
                      className="form__input"
                      placeholder="Введите ваш город"
                    />
                  </div>
                </div>
                <div className="form__point">
                  <span className="point">Пункт выдачи</span>
                  <div className="form__list">
                    <input
                      type="search"
                      className="form__input"
                      placeholder="Начните вводить пункт ..."
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <p className="maps__title">Выбрать на карте:</p>
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149079.73948362714!2d48.245238318886535!3d54.27970533121591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d365f8f42b3f5%3A0x2152ff0847091be4!2z0KPQu9GM0Y_QvdC-0LLRgdC6LCDQo9C70YzRj9C90L7QstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1651760863103!5m2!1sru!2sru"
              style={{ border: 3 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <Container
          path="/booking/car"
          text="Выбрать модель"
          pay="от 8 000 до 12 000 ₽"
          disable={disable}
        />
      </>
    );
}

export default Location;
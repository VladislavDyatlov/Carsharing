import React from "react";
import './Location.scss';

function Location(){
    return(
        <div className="container">
        <div className="container__two">
        <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <div className="form__list">
            <input type="text" className="form__input" />
          </div>
        </div>
        <div className="form__point">
          <span className="point">Пункт выдачи</span>
          <div className="form__list">
            <input type="text" className="form__input" placeholder="Начните вводить пункт ..." />
          </div>
        </div>
      </div>
    </form>
        <div className="map">
        <p className="map__title">Выбрать на карте:</p>
        <p>
        <img src="https://static-maps.yandex.ru/1.x/?l=map&ll=48.397032,54.328643&z=16" width="40%" height="70%"/>             
        </p>
        </div>      
      </div>
      </div>
    )
}

export default Location;
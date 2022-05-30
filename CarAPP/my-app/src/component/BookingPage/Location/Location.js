import React from "react";
import Container from "../Container/Container";
import {setItemInDisab} from '../../../redux/disable/reducer'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { setItemInLocation } from "../../../redux/location/reducer";
import { YMaps, Map } from 'react-yandex-maps';

import './Location.scss';

function Location(){

  const dispath = useDispatch()
  const disable = useSelector((state) => state.disable.itemsInDisab)
  const location = useSelector(state => state.location.itemsInLocation)

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
                      name="city"
                      list="cityname"
                      onChange={(el) => dispath(setItemInLocation(el.target.value))}
                      onClick={() => dispath(setItemInDisab(true))}
                    />
                    <datalist id="cityname">
                      <option value="Ульяновск" />
                      <option value="Москва" />
                      <option value="Санкт-Петербург" />
                    </datalist>
                  </div>
                </div>
                <div className="form__point">
                  <span className="point">Пункт выдачи</span>
                  <div className="form__list"> 
                    <input
                      type="search"
                      className="form__input"
                      placeholder="Начните вводить пункт ..."
                      list="citynam" 
                      value={location}
                    />
                    <datalist id="citynam">
                      <option value={location} /> 
                    </datalist>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <p className="maps__title">Выбрать на карте:</p>
          <div className="maps">
            <YMaps style={{width: '700px'}}>
              <div>
                <Map
                  defaultState={{ center: [54.2794618, 48.1051445], zoom: 9 }}
                />
              </div>
            </YMaps>
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
import React, {useState} from 'react';
import Lefts from '../../../../img/left-arrow.svg'
import Rights from '../../../../img/right-arrow.svg'
import './Slider.scss'


function Slider({img,text,title,button, active, PrevSlide, NextSlide}){

    return(

        <div className={`slide ${active ? "active" : ""}`}>
        <div className="slide__image">
          <img src={img} />
        </div>
        <div className="slide__wrapper">
          <div className="slide__arrow slide__arrow--left" onClick={PrevSlide} >
            <img src={Lefts} />
          </div>
          <div className="slide__content">
            <h2 className="slide__title">{title}</h2>
            <p className="slide__text">{text}</p>
            <button
              className="slide__button"
              style={{ background: `${button}` }}
            >
              Подробнее
            </button>
          </div>
          <div
            className="slide__arrow slide__arrow--right" onClick={NextSlide} >
            <img src={Rights} />
          </div>
        </div>
      </div>
    )
}

export default Slider;
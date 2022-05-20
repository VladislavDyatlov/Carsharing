import React from "react";
import "./Slider.scss";

function Slider({ img, text, title, button, active, PrevSlide, NextSlide }) {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <div className="slide__image">
        <img src={img} />
      </div>
      <div className="slide__wrapper">
        <div className="slide__arrow slide__arrow--left" onClick={PrevSlide}>
          <img
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612480456_47-p-strelka-na-serom-fone-61.png"
            width="40"
            height="40"
          />
        </div>
        <div className="slide__content">
          <h2 className="slide__title">{title}</h2>
          <p className="slide__text">{text}</p>
          <button className="slide__button" style={{ background: `${button}` }}>
            Подробнее
          </button>
        </div>
        <div className="slide__arrow slide__arrow--right" onClick={NextSlide}>
          <img
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612480456_47-p-strelka-na-serom-fone-61.png"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;

import React, {useState} from "react";
import slide0 from "../../images/slider-1.jpg";
import slide1 from "../../images/slider-2.jpg";
import slide2 from "../../images/slider-3.jpg";
import slide3 from "../../images/slider-4.jpg";
import './SliderHome.scss'
import Slideres from './Sliders/Slider'

const SliderInfo = {
  slideNum: 0,
  SliderText: [
    {
      img: slide0,
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      button: "linear-gradient(to right, #13493F, #0C7B1B)",
      id: 0,
    },
    {
      img: slide1,
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      button: "linear-gradient(to right, #132949, #0C7B67)",
      id: 1,
    },
    {
      img: slide2,
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      button: "linear-gradient(to right, #493013, #7B0C3B)",
      id: 2,
    },
    {
      img: slide3,
      text: "Автомобиль проходит еженедельное TO",
      title: "Обслуживание",
      button: "linear-gradient(to right, #281349, #720C7B)",
      id: 3,
    },
  ],
};
 

function SliderHome() {

  const [hide, setHide] = useState(false);

  return (
    <div className={`slider ${hide  ? "hide" : ""}`}>
      {SliderInfo.SliderText.map(info => {
        return (
          <Slideres
            img={info.img}
            text={info.text}
            title={info.title}
            active={SliderInfo.slideNum === info.id ? true : false}
            SliderText={SliderInfo.SliderText.length}
            id={info.id}
            key={info.id}
            button={info.button}
            hide={hide}
          />
        );
      })}
    </div>
  );
};

export default SliderHome
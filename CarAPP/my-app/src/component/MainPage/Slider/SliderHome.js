import React, {useState} from "react";
import './SliderHome.scss'
import Slideres from './Sliders/Slider'
import Circle from './circle/circle'

const SliderInfo = {
  SliderText: [
    {
      img: "https://ia.wampi.ru/2022/05/19/slider-1.jpg",
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      button: "linear-gradient(to right, #13493F, #0C7B1B)",
      id: 1,
    },
    {
      img: "https://ie.wampi.ru/2022/05/19/slider-2.jpg",
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      button: "linear-gradient(to right, #132949, #0C7B67)",
      id: 2,
    },
    {
      img: "https://ie.wampi.ru/2022/05/19/slider-3.jpg",
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      button: "linear-gradient(to right, #493013, #7B0C3B)",
      id: 3,
    },
    {
      img: "https://ia.wampi.ru/2022/05/19/slider-4.jpg",
      text: "Автомобиль проходит еженедельное TO",
      title: "Обслуживание",
      button: "linear-gradient(to right, #281349, #720C7B)",
      id: 4,
    },
  ],
};
 

function SliderHome({hide}) {

  const [slideNum, setSlideNum] = useState(1)

  const NextSlide = () =>{
    if( slideNum !== SliderInfo.SliderText.length){
      setSlideNum(slideNum + 1) 
    } 
    if(slideNum === SliderInfo.SliderText.length){
      setSlideNum(1)
    }
  }
  
  const PrevSlide = () =>{ 
    if(slideNum !== 1){
      setSlideNum(slideNum - 1)
    }
     if(slideNum === 1){
      setSlideNum(SliderInfo.SliderText.length) 
    }
  }


  return (
    <div className={`slider ${hide  ? "hide" : ""}`}>
      {SliderInfo.SliderText.map(info => {
        return (
          <Slideres
            img={info.img}
            text={info.text}
            title={info.title}
            active={slideNum === info.id ? true : false}
            SliderText={SliderInfo.SliderText.length}
            SliderInfo={SliderInfo.SliderText}
            value={slideNum}
            id={info.id}
            key={info.id}
            button={info.button}
            hide={hide}
            NextSlide={NextSlide} 
            PrevSlide={PrevSlide}
          />
        );
      })}
      <Circle 
        SliderInfo={SliderInfo.SliderText}
        value={slideNum} 
        setSlideNum={setSlideNum}
        />
    </div>
  );
};

export default SliderHome
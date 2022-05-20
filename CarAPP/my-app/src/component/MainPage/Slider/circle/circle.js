import React from "react";
import './circle.scss'

function circle({SliderInfo, value, setSlideNum}){

  const MovieCircle = index =>{
    setSlideNum(index);
  }

    return(
        <div className="circle">
        {SliderInfo?.map(el => {
          return (
            <span
              id={`circle-${el.id}`}
              key={el.id}
              className={value === el.id ? "active" : ""}
              onClick={() => MovieCircle(el.id)}
            />
          ); 
        })}
      </div>  
    )
}

export default circle;
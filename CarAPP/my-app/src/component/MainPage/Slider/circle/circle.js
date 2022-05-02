import React from "react";
import './circle.scss'

function circle({SliderInfo, value}){

    const circlebutton = (id) =>{
        return id
    }

    return(
        <div className="circle">
        {SliderInfo?.map(el => {
          return ( 
            <span
              id={`circle-${el.id}`}
              key={el.id}
              className={value === el.id ? "active" : ""}
              onClick={() => circlebutton(el.id)}
            />
          );
        })}
      </div>
    )
}

export default circle;
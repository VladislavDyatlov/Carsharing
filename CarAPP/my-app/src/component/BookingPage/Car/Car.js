import React from "react";
import './Car.scss';
import elantra from "../../../img/elantra.png";
import creta from "../../../img/creta.png";
import i30n from "../../../img/i30n.png";
import sonata from "../../../img/sonata.png";

const CarModel = {
    isChoseModel: false,
    cars: [
      {
        id: 0,
        active: false,
        car: 'Hyndai',
        model: "ELANTRA",
        pay: "12 000 - 25 000 ₽",
        img: elantra,
      },
      {
        id: 1,
        active: false,
        car: 'Hyndai',
        model: "i30 N",
        pay: "10 000 - 32 000 ₽",
        img: i30n,
      },
      {
        id: 2,
        active: false,
        car: 'Hyndai',
        model: "CRETA",
        pay: "12 000 - 25 000 ₽",
        img: creta,
      },
      {
        id: 3,
        active: false,
        car: 'Hyndai',
        model: "SONATA",
        pay: "10 000 - 32 000 ₽",
        img: sonata,
      },
      {
        id: 4,
        active: false,
        car: 'Hyndai',
        model: "ELANTRA",
        pay: "12 000 - 25 000 ₽",
        img: elantra,
      },
      {
        id: 5,
        active: false,
        car: 'Hyndai',
        model: "i30 N",
        pay: "10 000 - 32 000 ₽",
        img: i30n,
      },
      {
        id: 6,
        active: false,
        car: 'Hyndai',
        model: "ELANTRA",
        pay: "12 000 - 25 000 ₽",
        img: elantra,
      },
      {
        id: 7,
        active: false,
        car: 'Hyndai',
        model: "SONATA",
        pay: "10 000 - 32 000 ₽",
        img: sonata,
      },
    ],
  };

function Car(){
    return( 
        <div className="cars">
        <div className="car-choosie">
        <p className="car-choosie__item">Все модели</p>
        <p className="car-choosie__item">Эконом</p>
        <p className="car-choosie__item">Премиум</p>
      </div>
        {CarModel.cars.map((car) =>(
        <div>
        <li key={car.id} className={`car ${CarModel.cars.active ? "active" : "disable"}`}>
          <span className="car__model">{car.model}</span>
          <span className="car__pay">{car.pay}</span>
          <div className="car__imges">
            <img src={car.img} alt="" className="car__img" width="256px" height="116px" />
          </div>  
          </li>                        
        </div>    
        ))}
        </div>
    )
}

export default Car;
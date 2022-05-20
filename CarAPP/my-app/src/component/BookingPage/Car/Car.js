import React from "react";
import './Car.scss';
import Container from "../Container/Container";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {setItemInCart} from '../../../redux/basket/reducer'
import {setItemInDisable} from '../../../redux/disable/reducer'

const cars = [
  {
    id: 0,
    car: "Hyndai",
    model: "ELANTRA",
    pay: "12 000 - 25 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/elantra.png",
  },
  {
    id: 1,
    car: "Hyndai",
    model: "i30 N",
    pay: "10 000 - 32 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/i30n.png",
  },
  {
    id: 2,
    car: "Hyndai",
    model: "CRETA",
    pay: "12 000 - 25 000 ₽",
    price: "16 000 ₽",
    img: "https://ia.wampi.ru/2022/05/19/creta.png",
  },
  {
    id: 3,
    car: "Hyndai",
    model: "SONATA",
    pay: "10 000 - 32 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/sonata.png",
  },
  {
    id: 4,
    car: "Hyndai",
    model: "ELANTRA",
    pay: "12 000 - 25 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/elantra.png",
  },
  {
    id: 5,
    car: "Hyndai",
    model: "i30 N",
    pay: "10 000 - 32 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/i30n.png",
  },
  {
    id: 6,
    car: "Hyndai",
    model: "ELANTRA",
    pay: "12 000 - 25 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/elantra.png",
  },
  {
    id: 7,
    car: "Hyndai",
    model: "SONATA",
    pay: "10 000 - 32 000 ₽",
    price: "16 000 ₽",
    img: "https://ie.wampi.ru/2022/05/19/sonata.png",
  },
];

function Car(){

  const dispatch = useDispatch();
  const disable = useSelector(state => state.disable.itemsInDisable)


  const handleClick = (car) => {
    dispatch(setItemInCart(car));
  }; 


  const Disable = () =>{
    dispatch(setItemInDisable(true))
  } 

    return( 

      <>
      <div>
      <div className="models-filter">
      <input class="custom-radio" name="color" type="radio" id="color-green" value="green" />
      <label for="color-green" className="models-filter__item">Все модели</label>
      <input class="custom-radio" name="color" type="radio" id="color-green" value="green" />
      <label for="color-green" className="models-filter__item">Эконом</label>
      <input class="custom-radio" name="color" type="radio" id="color-green" value="green" />
      <label for="color-green" className="models-filter__item">Премиум</label>
    </div>        
        <div className="cars">
        <div className="car-choosie">
      </div>
        {cars?.map((car) =>(
        <div key={car.id} onClick={() => handleClick(car)} className={`buy ${disable ? "state" : ""}`}>
        <li onClick={() => Disable()}className={`car ${cars.active ? "active" : "disable"}`}>
          <span className="car__model">{car.model}</span>
          <span className="car__pay">{car.pay}</span>
          <div className="car__imges">
            <img src={car.img} alt="" className="car__img" width="256px" height="116px" />
          </div>  
          </li>                        
        </div>    
        ))}
        </div>
        </div>
        <Container path="/booking/option" text="Дополнительно" price="8 000 - 12 000 ₽" disable={disable} />
        </>
    )
}

export default Car;
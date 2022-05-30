import React, { useEffect, useState } from "react";
import './Car.scss';
import Container from "../Container/Container";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {setItemInCart} from '../../../redux/basket/reducer'
import {setItemInDisable} from '../../../redux/disable/reducer'
import { setItemInNavigat } from "../../../redux/navigate/navigate";

const cars = [
  {
    id: 0,
    car: "Audi",
    model: "Quattro",
    pay: "12 000 - 25 000 ₽",
    price: "18 000 ",
    img: "https://ia.wampi.ru/2022/05/28/g-removebg-preview.png",
    nubmer: "A 695 KA",
    category: "rich",
  },
  {
    id: 1,
    car: "BMW",
    model: "X1 RED",
    pay: "10 000 - 32 000 ₽",
    price: "16 000 ",
    img: "https://ie.wampi.ru/2022/05/28/image-removebg-preview.png",
    nubmer: "O 789 OO",
    category: "rich",
  },
  {
    id: 2,
    car: "Hyndai",
    model: "CRETA",
    pay: "12 000 - 25 000 ₽",
    price: "15 000 ",
    img: "https://ia.wampi.ru/2022/05/19/creta.png",
    nubmer: "A 156 HT",
    category: "poor",
  },
  {
    id: 3,
    car: "Hyndai",
    model: "SONATA",
    pay: "10 000 - 32 000 ₽",
    price: "10 000 ",
    img: "https://ie.wampi.ru/2022/05/19/sonata.png",
    nubmer: "T 001 PA",
    category: "poor",
  },
  {
    id: 4,
    car: "Mercedes",
    model: "CLI",
    pay: "12 000 - 25 000 ₽",
    price: "19 000 ",
    img: "https://ie.wampi.ru/2022/05/28/8232c1efea3d43f76082e83da8b9ef0b-removebg-preview.png",
    nubmer: "M 345 AA",
    category: "rich",
  },
  {
    id: 5,
    car: "Hyndai",
    model: "i30 N",
    pay: "10 000 - 32 000 ₽",
    price: "14 000 ",
    img: "https://ie.wampi.ru/2022/05/19/i30n.png",
    nubmer: "A 482 BP",
    category: "poor",
  },
  {
    id: 6,
    car: "Hyndai",
    model: "ELANTRA",
    pay: "12 000 - 25 000 ₽",
    price: "11 000 ",
    img: "https://ie.wampi.ru/2022/05/19/elantra.png",
    nubmer: "B 295 EA",
    category: "poor",
  },
  {
    id: 7,
    car: "Range",
    model: "Rover",
    pay: "10 000 - 32 000 ₽",
    price: "17 000 ",
    img: "https://ia.wampi.ru/2022/05/28/jeep-removebg-preview.png",
    nubmer: "H 007 OA",
    category: "rich",
  },
];

const radio = [
  {
    key: "ail",
    text: "Все",
  },
  {
    key: "poor",
    text: "Эконом",
  },
  {
    key: "rich",
    text: "Премиум",
  },
]

function Car(){

  const dispatch = useDispatch();
  const disable = useSelector(state => state.disable.itemsInDisable)
  const [current, setCurrent] = useState(cars)


  const handleClick = (car) => {
    dispatch(setItemInCart(car));
  }; 


  const Disable = () =>{
    dispatch(setItemInDisable(true)) 
  } 

  const Filter = (category) =>{
    
    if(category === "ail"){
      setCurrent(cars)
      return null;
    }

    setCurrent(
      cars.filter(el => el.category === category)
    )
  }

  useEffect(() =>{
    dispatch(setItemInNavigat(true))
  })

    return (
      <>
        <div>
          <div className="models-filter">
            {radio.map((category) => (
              <>
                <input
                  name="color"
                  type="radio"
                  value="green"
                  onClick={() => Filter(category.key)}
                />
                <label
                  for="color-green"
                  className="models-filter__item"
                >
                  {category.text}
                </label>
              </>
            ))}
          </div>
          <div className="cars">
            <div className="car-choosie"></div>
            {current?.map((car) => (
              <div
                key={car.id}
                onClick={() => handleClick(car)}
                className="buy"
              >
                <li
                  onClick={() => Disable()}
                  className={`car ${cars.active ? "active" : "disable"}`}
                >
                  <span className="car__model">{car.model}</span>
                  <span className="car__pay">{car.pay}</span>
                  <div className="car__imges">
                    <img
                      src={car.img}
                      alt=""
                      className="car__img"
                      width="256px"
                      height="116px"
                    />
                  </div>
                </li>
              </div>
            ))}
          </div>
        </div>
        <Container
          path="/booking/option"
          text="Дополнительно"
          price="8 000 - 12 000 ₽"
          disable={disable}
        />
      </>
    );
}

export default Car;
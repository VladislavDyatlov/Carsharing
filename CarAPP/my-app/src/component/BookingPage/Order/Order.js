import React, {useEffect} from "react";
import './Order.scss';
import Container from "../Container/Container";
import {useDispatch} from 'react-redux';
import {setItemInDisable} from '../../../redux/disable/reducer'
import { setItemInBooking } from "../../../redux/booking/reducer";
import {useSelector} from 'react-redux'

function Order({text}){

  const items = useSelector((state) => state.cart.itemsInCart);

  const dispath = useDispatch()

  const Disable = () =>{
    dispath(setItemInDisable(false))
  } 

  useEffect(() =>{
    dispath(setItemInBooking(false))
}, [])

  const disable = true

    return( 
      <>
      <div className="total-main">
        <div className="total-main__two">
        <section className="total-info"> 
        <div className="total-info__container">
          {text}
          <span className="total-info__model">{items.map((car) => car.car)},{items.map((car) => car.model)}</span>
          <div className="total-info__number">
            <span>К 761 НА 73</span>
          </div>
          <p className="total-info__fuel"> 
            <span>Топливо </span>100%
          </p>
          <p className="total-info__date">
            <span>Доступна с </span>12.06.2019 12:00
          </p> 
        </div> 
      </section>   
      <img src={items.map((cart) => cart.img)} />  
        </div>     
      </div>
      <Container path="/booking/order" text="Заказать" disable={disable} />
      </>
    )
}

export default Order;
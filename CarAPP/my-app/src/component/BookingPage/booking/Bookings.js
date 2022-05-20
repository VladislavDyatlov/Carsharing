import React from "react";
import './Bookings.scss';
import Container from "../Container/Container";
import {useSelector} from 'react-redux'

export function Bookings(){

    const items = useSelector((state) => state.cart.itemsInCart);
    const disable = true
    const button = true

    return (
      <>
        <div className="total-main">
          <div className="total-main__two">
            <section className="total-info">
              <div className="total-info__container">
                <h2>Ваш заказ подтвержден</h2>
                <span className="total-info__model">
                  {items.map((car) => car.car)},{items.map((car) => car.model)}
                </span>
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
        <Container
          path="/booking/order"
          Bookings={Bookings}
          text="Отменить"
          disable={disable}
          button={button}
        />
      </>
    );
}
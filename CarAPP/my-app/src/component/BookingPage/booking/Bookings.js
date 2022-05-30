import React from "react";
import './Bookings.scss';
import Container from "../Container/Container";
import {useSelector} from 'react-redux'

export function Bookings(){

    const items = useSelector((state) => state.cart.itemsInCart);
    const item = useSelector((state) => state.option.ItemsInDate);
    const disable = true
    const button = true

    return (
      <>
        <div className="total-main">
          <div className="total-main__two">
            {items && (
              <>
                <section className="total-info">
                <p className="total-info__booking">Ваш заказ подтвержден</p>
                  <div className="total-info__container">
                    <span className="total-info__model">
                      {items.car},{items.model}
                    </span>
                    <div className="total-info__number">
                      <span>{items.nubmer}</span>
                    </div>
                    <p className="total-info__fuel">
                      <span>Топливо </span>100%
                    </p>
                    <p className="total-info__date">
                      <span>Доступна с </span>{item}
                    </p>
                  </div>
                </section>
                <img src={items.img} width="256px" height="116px" />
              </>
            )}
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
import React, {useEffect} from "react";
import './Order.scss';
import Container from "../Container/Container";
import {useDispatch} from 'react-redux';
import {setItemInNavigates} from '../../../redux/navigate/navigate'
import { setItemInBooking } from "../../../redux/booking/reducer";
import {useSelector} from 'react-redux'

function Order({text}){

  const items = useSelector((state) => state.cart.itemsInCart);
  const item = useSelector((state) => state.option.ItemsInDate);

  const dispath = useDispatch()

  useEffect(() =>{
    dispath(setItemInNavigates(true))
  },[])

  useEffect(() => {
    dispath(setItemInBooking(false));
  }, []);

  const disable = true

    return (
      <>
        <div className="total-main">
          <div className="total-main__two">
            {text}
            {items && (
              <>
                <section className="total-info">
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
                      <span>Доступна с </span>
                      {item}
                    </p>
                  </div>
                </section>
                <img src={items.img} width="256px" height="116px" />
              </>
            )}
          </div>
        </div>
        <Container path="/booking/order" text="Заказать" disable={disable} />
      </>
    );
}

export default Order;
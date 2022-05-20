import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';
import { useSelector } from "react-redux";
import Navigate from './Navigate/Navigate'

export default function Navigation({state}) {

  const nav = useSelector(nav => nav.disable.itemsInDisable)
  const navs = useSelector(nav => nav.disable.itemsInDisables)
  const booking = useSelector(nav => nav.booking.itemsInBooking)

  const Navigations = [
    {
      id: 0,
      text: "Местоположение",
      state: true,
      path: "location",
    },
    {
      id: 1, 
      text: "Модель",
      state: true,
      path: "car",
    },
    {
      id: 2,
      text: "Дополнительно",
      state: nav,
      path: "option",
    },
    {
      id: 3,
      text: "Итого", 
      state: navs,
      path: "order",
    },
];

    return(
        <div className="navigations">
            <div className="navigations__container">
              { booking
              ?
                <strong>Заказ номер RU58491823</strong>
              :
                <Navigate Navigations={Navigations} />
              }  
            </div>
        </div>
    );
}
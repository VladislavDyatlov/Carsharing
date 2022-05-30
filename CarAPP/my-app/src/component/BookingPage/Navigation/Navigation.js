import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';
import { useSelector } from "react-redux";
import Navigate from './Navigate/Navigate'

export default function Navigation() {

  const nav = useSelector(nav => nav.navigate.itemsInNavigate)
  const navs = useSelector(nav => nav.navigate.itemsInNavigates)
  const navigate = useSelector(nav => nav.navigate.itemsInNavigat)
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
      state: navigate,
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

const number = Math.floor(Math.random() * 34848328)

    return(
        <div className="navigations">
            <div className="navigations__container">
              { booking
              ?
                <strong>Заказ номер RU{number}</strong>
              :
                <Navigate Navigations={Navigations} />
              }  
            </div>
        </div>
    );
}
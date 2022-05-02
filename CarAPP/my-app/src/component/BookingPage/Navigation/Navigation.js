import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigations = [
      {
        id: 0,
        text: "Местоположение",
        state: false,
        path: "location",
      },
      {
        id: 1, 
        text: "Модель",
        state: false,
        path: "car",
      },
      {
        id: 2,
        text: "Дополнительно",
        state: false,
        path: "option",
      },
      {
        id: 3,
        text: "Итого",
        state: false,
        path: "order",
      },
];

export default function Navigation() {
    return(
        <div className="navigations">
            <div className="navigations__container">
            {Navigations?.map((nav) =>(
            <li key={nav.id} className={`nav-li ${nav.state ? "state" : ""}`}>
                <Link to={nav.path} className={`state-li__link`}>
                    {nav.text}
                </Link>
            </li>                
            ))}
            </div>
        </div>
    );
}
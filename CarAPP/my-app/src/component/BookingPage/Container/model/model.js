import React from 'react';
import './model.scss'
import { Link } from 'react-router-dom';
import {setItemInBooking} from '../../../../redux/booking/reducer'
import {useDispatch} from 'react-redux';

export default function({model, setModel}){

    const dispath = useDispatch();

    const Bookings = () => {
      dispath(setItemInBooking(true));
    }; 

    return (
        <div className={model ? "model active" : "model"} onClick={() => setModel(false)}>
            <div className="model__content" onClick={(e) => e.stopPropagation()}>
                <p className="model__text">Подтвердить заказ</p>
                <div className="model__button">
                    <Link to="/booking/bookings" onClick={() => Bookings()} className="model__button btn2">Подтвердить</Link>
                    <a onClick={() => setModel(false)} className="model__button btn1">Вернуться</a>
                </div>
            </div>
        </div>
    )
}  
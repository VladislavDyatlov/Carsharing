import React from 'react';
import './Booking.scss';
import Header from '../MainPage/Center/Header/Header';
import Location from './Location/Location';
import Navigation from './Navigation/Navigation';
import {
    Routes,
    Route,
  } from 'react-router-dom';
import Car from './Car/Car';
import Option from './Option/Option';
import Order from './Order/Order';

function Booking(){
    return (
        <div className="booking">
            <Header />
            <Navigation />
            <div className="booking__navigation"> 
            <Routes>
            <Route index path="location" element={<Location />} />
            <Route path="car" element={<Car />} />
            <Route path="option" element={<Option />} />
            <Route path="order" element={<Order />} />  
            </Routes>       
            </div>
        </div>
    );
}

export default Booking;
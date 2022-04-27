import React from 'react'
import './Page.scss';
import CenterMain from './Center/CenterMain';
import SliderHome from './Slider/SliderHome'
import Navbar from './Navbar/Navbar'

function Page(){
    return(
        <div className="page">
            <Navbar />
            <CenterMain />
            <SliderHome />
        </div>
    )
}

export default Page
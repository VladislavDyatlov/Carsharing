import React from "react";
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import './CenterMain.scss'

function CenterMain(){
    return(
        <div className="centermain">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default CenterMain;
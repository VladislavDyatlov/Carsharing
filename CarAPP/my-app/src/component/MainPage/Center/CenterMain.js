import React from "react";
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import './CenterMain.scss'

function CenterMain({ eng, Eng }) {
  return (
    <div className="centermain">
      <Header eng={eng} Eng={Eng} />
      <Main eng={eng} />
      <Footer eng={eng} /> 
    </div>
  );
}

export default CenterMain;
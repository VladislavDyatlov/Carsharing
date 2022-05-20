import React, {useState} from 'react'
import './Page.scss';
import CenterMain from './Center/CenterMain';
import SliderHome from './Slider/SliderHome'
import Navbar from './Navbar/Navbar'

function Page(){

    const [hide, setHide] = useState(false);
    const [eng, setEng] = useState(false);  

    const Eng = () =>{
        setEng(!eng) 
    }

    return(
        <div className="page">
            <Navbar eng={eng} Eng={Eng} hide={hide} setHide={setHide}/>
            <CenterMain  eng={eng} Eng={Eng} />
            <SliderHome hide={hide} setHide={setHide}/>
        </div>
    )  
}

export default Page
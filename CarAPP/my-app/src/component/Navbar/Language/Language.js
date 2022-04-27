import React from "react";
import './Language.scss'

function Language({name}){
    return(
        <div className={name}>
            <a href="#" className="language__a">Eng</a>
        </div>
    );
}
 
export default Language;
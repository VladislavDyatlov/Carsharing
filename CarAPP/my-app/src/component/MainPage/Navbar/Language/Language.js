import React from "react";
import './Language.scss'

function Language({ className, eng, Eng}) {
  return (
    <div className={className}>
      <a href="#" onClick={Eng} className="language__a">
        {eng ? "Рус" : "Eng"}
      </a>
    </div> 
  );
}  
 
export default Language; 
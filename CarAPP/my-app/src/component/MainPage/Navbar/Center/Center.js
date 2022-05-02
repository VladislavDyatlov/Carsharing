import './Center.scss';
import React from 'react'
import Language from '../Language/Language'

const MenuInformation = [
    'ПАРКОВКА',
    'СТРАХОВКА',
    'БЕНЗИН',
    'ОБСЛУЖИВАНИЕ'
]

function Center({active, setActive}){
    return(
    <nav className={active ? "navigation active" : "navigation" }>
        <div className="navigation__element">
            <ul className="navigation__ul">
                {MenuInformation.map((text) =>(
                    <li className="navigation__text">
                        <a className="navigation__a"> 
                        {text}
                        </a> 
                    </li> 
                ))}
                <div className="photo">
                <a href="#" className="photo__icon">
                    <img src="https://static.tildacdn.com/tild3863-3236-4363-a530-316264313265/_-17.png" with="30" height="30" />
                </a>
            </div>
            </ul>
            <Language className="language language--navigation" />
        </div>
    </nav>
    );
}

export default Center;
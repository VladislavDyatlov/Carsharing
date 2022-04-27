import React from 'react'
import './Header.scss'

function Header(){
    return (
        <header className="header">
            <div className="header__two">
                <div className="header__three">
                    <a href="#" className="header__a">
                        Need For Drive 
                    </a>
                </div>
                <div className="map">
                    <img src="https://static-cdn5.vigbo.tech/u6631/8105/blog/-1/1161509/23277754/2000-ef8281210af66e272241cd77b2d5cccb.png" className="map__img" width="20" header="20" />
                    <p className="map__text">Ульяновск</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
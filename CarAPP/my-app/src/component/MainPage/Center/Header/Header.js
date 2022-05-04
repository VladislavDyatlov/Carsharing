import React, {useState} from 'react'
import './Header.scss'
import Menu from '../../Navbar/Menu/Menu'
import Center from '../../Navbar/Center/Center';
import Language from '../../Navbar/Language/Language';
import { Link } from 'react-router-dom';

function Header(){

    const [active, setActive] = useState(false);

    return (
        <header className="header">
            <div className="header__two">
                <div className="header__three">
                    <Menu className="burger-menu burger-menu--header" active={active} setActive={setActive} />
                    <Link to="/" className="header__a">
                        Need For Drive 
                    </Link> 
                </div>
                <div className="map">
                    <img src="https://static-cdn5.vigbo.tech/u6631/8105/blog/-1/1161509/23277754/2000-ef8281210af66e272241cd77b2d5cccb.png" className="map__img" width="20" header="20" />
                    <p className="map__text">Ульяновск</p>
                </div>
            </div>
            <Center active={active} setActive={setActive}/>
        </header>
    );
}

export default Header;
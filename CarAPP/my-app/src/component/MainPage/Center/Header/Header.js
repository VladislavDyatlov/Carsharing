import React, {useState} from 'react'
import './Header.scss'
import Menu from '../../Navbar/Menu/Menu'
import Center from '../../Navbar/Center/Center';
import { Link } from 'react-router-dom';

function Header({ eng, Eng }) {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <div className="header__two">
        <div className="header__three">
          <Menu
            className="burger-menu burger-menu--header"
            active={active}
            setActive={setActive}
          />
          <Link to="/" className="header__a">
            {eng ? "Нужен Драйв" : "Need For Drive"}
          </Link>
        </div>
        <div className="map">
          <img src="https://dmploc.re/img/cms/pin.png" className="map__img" />
          <p className="map__text">Ульяновск</p>
        </div>
      </div>
      <Center active={active} setActive={setActive} eng={eng} Eng={Eng} />
    </header>
  );
}

export default Header;
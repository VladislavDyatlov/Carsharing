import React, {useState} from "react";
import Center from "./Center/Center"
import Language from "./Language/Language";
import { Menu } from "./Menu/Menu";
import './Navbar.scss'


function Navbar({hide, setHide, eng, Eng}){ 

    const [active, setActive] = useState(false); 
 
    return (
      <div className="index">
        <div className="index-two">
          <Menu
            className="burger-menu burger-menu--active"
            hide={hide}
            setHide={setHide}
            active={active}
            setActive={setActive}
          />
          <Center eng={eng} Eng={Eng} active={active} setActive={setActive} />
          <Language className="language" eng={eng} Eng={Eng} />
        </div>
      </div>
    );  
} 

export default Navbar;
import React, {useState} from "react";
import Center from "./Center/Center"
import Language from "./Language/Language";
import { Menu } from "./Menu/Menu";
import './Navbar.scss'


function Navbar(){

    const [active, setActive] = useState(false);
 
    return(
        <div className="index">
            <div className="index-two">
                <Menu active={active} setActive={setActive} />
                <Language name="language" />
                <Center active={active} setActive={setActive} />   
            </div>
        </div>
    );
}

export default Navbar;
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
                <Menu className="burger-menu burger-menu--active" active={active} setActive={setActive} />
                <Center active={active} setActive={setActive} />  
                <Language className="language" /> 
            </div>
        </div>
    );
} 

export default Navbar;
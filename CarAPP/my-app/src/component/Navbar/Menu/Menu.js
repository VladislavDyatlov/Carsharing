import React from "react";
import "./Menu.scss";



export const Menu = ({active,setActive}) => {

  return (
    <div>

    {!active ? (
    <div className="burger-menu burger-menu--active" onClick={() => setActive(!active)} >
      	<img src="https://www.bristolinc.com/icons/menu_original.png" width="30" height="30"/>
    </div>
    ):(
      <div className="burger-menu burger-menu--active" onClick={() => setActive(!active)} >
      <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/11/14/d3/1114d3f6-bf69-4a21-da2a-fcdecdd67f51/contsched.fjqcsanu.png/1200x630bb.png" width="30" height="30"/>
  </div>
    )}

    </div>
  );
};

export default Menu;

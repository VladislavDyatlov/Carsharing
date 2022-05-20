import React from "react";
import "./Menu.scss";



export const Menu = ({active,setActive, className, hide, setHide}) => {

  return (
    <div onClick={() => setActive(!active)}>
      <div onClick={() => setHide(!hide)}>
        {!active ? (
          <div className={className}>
            <img
              src="https://www.bristolinc.com/icons/menu_original.png"
              width="30"
              height="30"
            />
          </div>
        ) : (
          <div className={className}>
            <img
              className="mark"
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/11/14/d3/1114d3f6-bf69-4a21-da2a-fcdecdd67f51/contsched.fjqcsanu.png/1200x630bb.png"
              width="20"
              height="20"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

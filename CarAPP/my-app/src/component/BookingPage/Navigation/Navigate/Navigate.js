import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navigate({Navigations}){

  const setActive = ({ isActive }) =>(isActive ? " active" : "");

    return (
      <>
        {Navigations?.map((nav) => (
          <li
            key={nav.id}
            className={`nav-li ${nav.state ? "active" : ""} ${
              nav.state ? "" : "state"
            }`}
          >
            <NavLink to={nav.path} className={`${setActive} state-li__link`}>
              {nav.text}
            </NavLink>
          </li>
        ))}
      </>
    );
}
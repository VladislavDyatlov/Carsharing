import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigate({Navigations}){
    return (
      <>
        {Navigations?.map((nav) => (
          <li key={nav.id} className={`nav-li ${nav.state ? "" : "state"}`}>
            <Link to={nav.path} className={`state-li__link`}>
              {nav.text}
            </Link>
          </li>
        ))}
      </>
    );
}
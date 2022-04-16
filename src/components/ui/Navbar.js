import React from 'react';
import { Logo } from './Logo';

import { toggleComponent } from '../../helpers/ToggleComponent';
import { NavLink } from 'react-router-dom';
import { ThemeSetter } from './ThemeSetter';

export const Navbar = () => {

  return (
    <nav className="navbar__wrapper">

      <div className='navbar__brand'>
        <i className="fa-solid fa-bars-staggered fa-2x hidden-lg-up mr-4" onClick={ () => toggleComponent( 'menu', 'left' ) }></i>
        <Logo />
      </div>
        

      <div className="navbar__collapse navbar__collapse-menu">
        <div className="navbar__nav">

          <button className='navbar__close-btn hidden-lg-up' onClick={ () => { toggleComponent( 'menu', 'left' ) } }>
            <i className="fa-solid fa-xmark fa-3x"></i>
          </button>

          <div onClick={ () => { toggleComponent( 'menu', 'left' ) } } className='hidden-lg-up navbar__logo'>
            <Logo />
          </div>

          <NavLink 
            activeClassName="active"
            className="navbar__item navbar__link mt-5" 
            exact
            to="/projects"
            onClick={ () => { toggleComponent( 'menu', 'left' ) } }
          >
            Projects
          </NavLink>

          <NavLink 
            activeClassName="active"
            className="navbar__item navbar__link" 
            exact
            to="/contact"
            onClick={ () => { toggleComponent( 'menu', 'left' ) } }
          >
            Contact
          </NavLink>

        </div>
      </div>

      <ThemeSetter />

  </nav>
  )
}

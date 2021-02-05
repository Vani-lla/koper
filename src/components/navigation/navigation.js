import React from 'react';
import './navigation.css';
import logo from '../../static/logo.png';

export default function navigation() {
   return (
      <nav>
         <img className='main-logo' src={logo} alt='logo' />
      </nav>
   )
}

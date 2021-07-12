
import React from 'react'
import TosComponent from "../components/TosComponent";
import Logo from '../components/Logo';

function HeaderComponent() {
  return (
    <div className='header'>
      <div className='logo-wrapper'>
        <Logo />
      </div>
      <div className='tos-wrapper'>
        <TosComponent />
      </div>
    </div>
  )
}

export default HeaderComponent;
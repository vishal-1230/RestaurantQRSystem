import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import logo from './images/bs.png'

function Header() {

  function onCartClicked(){
    document.getElementById('cart').style.visibility='visible'
    document.getElementById('DashboardInner').style.opacity=0.4
  }

  return (
    <div className='header'>
        <img src={logo} alt="" id='restrlogo' className="restrlogo" />
        <div className="txt">
          <span className='title'>Burger Singh</span>
          <span className="qrtxt">QR Menu</span>
        </div>
        <span className="cartCount" id='cartCount' onClick={onCartClicked}>0</span>
        <HiShoppingCart className='cartlogo' onClick={onCartClicked} />
    </div>
    )
}

export default Header
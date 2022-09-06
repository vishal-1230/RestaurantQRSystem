import React from 'react'
import logo from './images/bs.png'

function CheckoutHeader() {
  return (
    <div className='header' id='checkoutHeader'>
        <img src={logo} alt="" id='restrlogo' className="restrlogo" />
        <div className="txt">
          <span className='title'>Burger Singh</span>
          <span className="qrtxt">QR Menu</span>
        </div>
    </div>
  )
}

export default CheckoutHeader
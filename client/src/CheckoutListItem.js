import React from 'react'

function CheckoutListItem(props) {
  return (
    <div className='cartItem'>
        <span className="cartItemTitle">{props.title}</span>
        <span className="qty checkoutItemQty">{props.qty}</span>
        <span className="itemPrice checkoutItemPrice">{props.price*props.qty}</span>
    </div>
  )
}

export default CheckoutListItem
import React from 'react'
import { HiXCircle } from 'react-icons/hi'
import { useParams, Link } from 'react-router-dom'
import CartItem from './CartItem'

function Cart(props) {

    const params=useParams()

    let total=0
    props.list.map((i2)=>{
        total=parseInt(total)+parseInt(parseInt(i2.split("~")[1])*parseInt(i2.split("~")[2]))
    })

    function onCrossClicked(){
        document.getElementById('cart').style.visibility='hidden'
        document.getElementById('DashboardInner').style.opacity=1
    }

    
  return (
    <div className="cart" id='cart'>
        <div className="cartTop">
            <span id='cartTopTxt'>Cart</span>
            <HiXCircle id='closeIcon' onClick={onCrossClicked} />
        </div>
        <div className="cartOrderHeading">
            <p id='orderNumTxt'>Order #<span className="orderNum">24301</span></p>
            <span className="seatNumTxt">Seat No.: <span className="seatNum">{params.sid}</span></span>
        </div>
            <div className="cartListViewHeading">
                <span className="cartItemTitle">Item</span>
                <span className="qty qtyHeading">Qty</span>
                <span className="itemPrice priceHeading">Price</span>
            </div>
        <div className="cartListView">
            {props.list.map((i)=>{
                return <CartItem title={i.split("~")[0]} price={i.split("~")[1]} qty={i.split("~")[2]} list={props.list} onDel={props.onDel} />
            })}
            {/* <CartItem /> */}
            {/* <CartItem /> */}
            {/* <CartItem /> */}
            {/* <CartItem /> */}
            {/* <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem /> */}
        </div>
        <div className="cartFooter">
            <p className="total"><span className="totalTxt">Total&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="totalPrice">₹<span className="totalPriceNum">{total}</span></span></p>
            {/* <button className="orderBtn" onClick={onOrder} >Order By Cash</button> */}
            {/* <button className="orderByCash">Order By Cash</button> */}
            <Link to={'/checkout/'+params.sid}>
                <button className="checkoutBtn">Checkout</button>
            </Link>
        </div>
    </div>
  )
}

export default Cart
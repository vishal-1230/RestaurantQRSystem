import React from 'react'
import { useParams } from 'react-router-dom'
// import logo from './images/bs.png'

function Receipt(props) {
    const params=useParams()

	const total=params.total
    // alert(params.sid, params.orderid, params.method, params.total)
    // alert(params.total)
    // alert(params.method)
    // alert(params.orderid)
    // const date=new Date()

  return <div>
    <div>
    	<div class="invoice-box">
			<div className="invoiceTopbar">
			<span id='invoiceHead' >Invoice</span>
			<div className="headingRight">
				<span className="seatNumTxt1">Seat No. <span className="seatNum1">5</span></span><br /><br />
				<span className='orderNumTxt' >Order No. #<span className="orderNum">24501</span></span><br />
				<span className="nameTxt">Name: <span className="name">{params.name}</span></span><br />
				<span className="numberTxt">Number: <span className="number">{params.number}</span></span>
			</div><br />
			</div>
			<div className="itemListTitle">
				<span className="invoiceItemTitle">Item</span>
                <span className="invoiceQtyTitle">Qty</span>
                <span className="invoicePriceTitle">Price</span>
			</div>
			<div className="itemsList">
				{props.cartList.map((i)=>{
					return <div className='invoiceListItem'>
						<span className="invoiceItem">{i.split("~")[0]}</span>
						<span className="invoiceQty">{i.split("~")[2]}</span>
						<span className="invoicePrice">{i.split("~")[1]}</span>
					</div>
				})}
			</div>
			<div className="invoiceFooter cartFooter">
        	<p className="total"><span className="totalTxt">Amount&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="totalPrice">₹<span className="totalPriceNum">{total}</span></span></p>
        	<p className="total"><span className="totalTxt">Payment Method&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="totalPrice"><span className="totalPriceNum">Cash</span></span></p>

        	</div>
		</div>
    </div>
  </div>
}

export default Receipt

// merchant id 1304828
// access AVRH21JI44AA22HRAA
// working 3040AFA86E7A5575C6533D21866D0A31
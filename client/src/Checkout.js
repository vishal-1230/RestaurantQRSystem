import React from 'react'
import Header from './Header'
import CheckoutHeader from './CheckoutHeader'
import CheckoutListItem from './CheckoutListItem'
import CartItem from './CartItem'
import { useNavigate, useParams } from 'react-router-dom'
// import Razorpay from 'razorpay'


function Checkout(props) {

    const params=useParams()
    const navigate=useNavigate()

    const rand = () => {
      return Math.random().toString(36).substr(2);
    };
      
    const token = () => {
      return rand() + rand();
    };

    let total=0
    props.cartList.map((i2)=>{
        total=parseInt(total)+parseInt(parseInt(i2.split("~")[1])*parseInt(i2.split("~")[2]))
    })

    async function orderByCash(i){
        const name=prompt("Enter Your Name")
        const number=prompt("Enter Your Phone Number")
        // navigate(`/dashboard/2`)
        navigate(`/receipt/${token()}/${params.sid}/cash/${total}/${name}/${number}`)
        const response=await fetch(`http://192.168.162.189:8000/orderByCash`, {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:name, num:number, items:JSON.stringify(i), seat:params.sid, orderid:token()})
        })
        // window.location.href=`http://192.168.162.189:3000/receipt/${token}/${params.sid}/cash/${total}`
    }

    // function displayRazorpay(){
    //     var options = {
    //         "key": "rzp_live_yawCyESSGnaI3U", // Enter the Key ID generated from the Dashboard
    //         "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //         "currency": "INR",
    //         "name": "Acme Corp",
    //         "description": "Test Transaction",
    //         "image": "https://example.com/your_logo",
    //         "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    //         "prefill": {
    //             "name": "Gaurav Kumar",
    //             "email": "gaurav.kumar@example.com",
    //             "contact": "9999999999"
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     };
    //     // var rzp1 = new Razorpay(options);
    //     document.getElementById('rzp-button1').onclick = function(e){
    //         // rzp1.open();
    //         e.preventDefault();
    //     }
    // }

    
        

  return (
    <div className='checkout'>
        <CheckoutHeader id='checkoutHeader'/>
        <div className="cartListViewHeading checkoutListViewHeading">
                <span className="cartItemTitle">Item</span>
                <span className="qty qtyHeading">Qty</span>
                <span className="itemPrice checkoutPriceHeading">Price</span>
            </div>
        <div className="checkoutList">
            {props.cartList.map((i)=>{
                return <CheckoutListItem title={i.split("~")[0]} price={i.split("~")[1]} qty={i.split("~")[2]} />
            })}
        </div>
        <div className="checkoutFooter cartFooter">
        <p className="total"><span className="totalTxt">Total&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="totalPrice">₹<span className="totalPriceNum">{total}</span></span></p>
        <button className="checkoutBtn checkoutCash" onClick={()=>{orderByCash(props.cartList)}}>Order By Cash</button><br /><br />
        {/* <form action='https://test.payu.in/_payment' method='post'>
        <input type="hidden" name="key" value="ARzWvY" />
        <input type="hidden" name="txnid" value="t6svtqtjRdl4ws" />
        <input type="hidden" name="productinfo" value="iPhone" />
        <input type="hidden" name="amount" value="10" />
        <input type="hidden" name="email" value="test@gmail.com" />
        <input type="hidden" name="firstname" value="Ashish" />
        <input type="hidden" name="lastname" value="Kumar" />
        <input type="hidden" name="surl" value="https://google.com/" />
        <input type="hidden" name="furl" value="https://facebook.com/" />
        <input type="hidden" name="phone" value="9988776655" />
        <input type="hidden" name="hash" value="eabec285da28fd0e3054d41a4d24fe9f7599c9d0b66646f7a9984303fd6124044b6206daf831e9a8bda28a6200d318293a13d6c193109b60bd4b4f8b09c90972" />
        <input type="submit" value="submit" /> 
    </form> */}
    <button className="checkoutBtn checkoutOnline">Pay Online</button>
        {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KCXXY1tTFhaYaG" async> </script> </form> */}
        {/* <button id="rzp-button1">Pay</button> */}
        
        </div>
    </div>
  )
}

export default Checkout
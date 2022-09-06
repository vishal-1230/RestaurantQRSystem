import React from 'react'
import {MdClose} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'

function CartItem(props) {

    function onDel(){
        let a=[]
        for (let i2 of props.list){
            if (i2.split("~")[0]!=[props.title]){
                a.push(i2)
            }else{
                const oldCount=parseInt(document.getElementById('cartCount').innerHTML)
                document.getElementById('cartCount').innerHTML=oldCount-parseInt(i2.split("~")[2])
                document.getElementById(i2.split("~")[0].replace(" ", "_")).innerHTML=0
                document.getElementById('itemCountButton'+i2.split("~")[0].replace(" ", "_")).style.display='none'
                document.getElementById('btn'+i2.split("~")[0].replace(" ", "_")).style.display='inline'
            }
        }
        props.onDel(a)
    }

  return (
    <div className="cartItem">
        <span className="cartItemTitle">{props.title}</span>
        {/* <MdClose className='delItem' /> */}
        <span className="qty">{props.qty}</span>
        <span className="itemPrice">{props.price*props.qty}</span>
        <RiDeleteBin5Line className='delItem' onClick={onDel} />
    </div>
  )
}

export default CartItem
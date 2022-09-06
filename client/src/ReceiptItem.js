import React from 'react'

function ReceiptItem(props) {
  return (
    <div>
        <tr className='item'>
            <td>{props.i.split("~")[0]}&nbsp;&nbsp;x{props.i.split("~")[1]}</td>
            <td>₹{props.i.split("~")[2]}</td>
        </tr>
    </div>
  )
}

export default ReceiptItem
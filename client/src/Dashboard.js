import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Cart from './Cart';
import Categories from './Categories';
import Header from './Header';
import ItemList from './ItemList';

function Dashboard(props) {

  const [catSelected, setcatSelected] = useState('North Indian')
  const params=useParams()
  const sid=params.sid

//   const [cartList, setcartList] = useState([])

  return (
    <div className='Dashboard'>
    <Cart list={props.cartList} onDel={props.setcartList} />
        <div className="DashboardInner" id='DashboardInner'>
        <Header sid={sid} cartList={props.cartList} />
        <Categories onclick={setcatSelected} />
        <ItemList cat={catSelected} sid={sid} oldCart={props.cartList} onBtnClicked={props.setcartList} />
        </div>
    </div>
  )
}

export default Dashboard


import React, { useEffect } from 'react'
import { HiPlus } from 'react-icons/hi'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import vegicon from './images/veg.png'
import nonvegicon from './images/nonveg.png'

function Item(props) {

  // document.getElementById(props.title.replace(" ", "_")).innerHTML='0'
  // document.getElementById('itemCount'+props.title.replace(" ", "_")).style.display='none'
  // document.getElementById('btn'+props.title.replace(" ", "_")).style.display='inline'


  // document.getElementById('btn'+props.title.replace(" ", "_")).onload=()=>{
    // if (document.getElementById(props.title.replace(" ", "_")).innerHTML=='0'){
      // document.getElementById('btn'+props.title.replace(" ", "_")).style.display='inline'
      // document.getElementById(props.title.replace(" ", "_")).style.display='none'
    // }else{
      // document.getElementById('btn'+props.title.replace(" ", "_")).style.display='none'
    // }
  // }

  useEffect(()=>{
    for (let i of props.oldCart){
      if (i.split("~")[0]==props.title){
        document.getElementById(props.title.replace(" ","_")).innerHTML=i.split("~")[2]
        document.getElementById("btn"+props.title.replace(" ", "_")).style.display='none'
        document.getElementById("itemCountButton"+props.title.replace(" ", "_")).style.display='inline'
      }else{
        document.getElementById("btn"+props.title.replace(" ", "_")).style.display='inline'
        document.getElementById("itemCountButton"+props.title.replace(" ", "_")).style.display='none'
      }
    }
  })

  let veg=true
  if (props.veg=='veg'){
    veg=true
  }else {
    veg=false
  }

  function addItem(i){
    document.getElementById('cartCount').style.visibility='visible'
    let cartCount=document.getElementById('cartCount').innerHTML
    document.getElementById('cartCount').innerHTML=parseInt(cartCount)+1
    document.getElementById('itemCountButton'+i).style.display='inline'
    document.getElementById('btn'+i).style.display='none'
    let count=document.getElementById(i).innerHTML
    for (let i2 of props.oldCart)
    document.getElementById(i).innerHTML=parseInt(count)+1

    const itemDetail=i.replace("_", " ")+"~"+props.price+"~"+'1'
    let a = []
    // for (let i2 of props.oldCart){
    //   a.push(i2)
    // }
    let newItem=''
    for (let i2 of props.oldCart){
      if (i2.split("~")[0]==i.replace("_", " ")){
        let oldCount=parseInt(i2.split("~")[2])
        let newCount=oldCount+1
        newItem=i2.split("~")[0]+"~"+props.price+"~"+newCount.toString()
        a.push(newItem)
      }else{
        a.push(i2)
      }
    }
    a.push(itemDetail)
    props.onBtnClicked(a)
  }

  function onPlus(i){
    const count=document.getElementById(i).innerHTML
    document.getElementById(i).innerHTML=parseInt(count)+1
    let cartCount=document.getElementById('cartCount').innerHTML
    document.getElementById('cartCount').innerHTML=parseInt(cartCount)+1
    document.getElementById('cartCount').style.visibility='visible'

    let a=[]
    let newItem=''
    
for (let i2 of props.oldCart){
  if (i2.split("~")[0]==i.replace("_", " ")){
    const oldCount=parseInt(i2.split("~")[2])
    const newCount=oldCount+1
    newItem=i2.split("~")[0]+"~"+props.price+"~"+newCount.toString()
    a.push(newItem)
  }else{
    a.push(i2)
  }
}

    props.onBtnClicked(a)
  }

  function onMinus(i){
    const count=document.getElementById(i).innerHTML
    if (count=='1'){
      document.getElementById('itemCountButton'+i).style.display='none'
      document.getElementById('btn'+i).style.display='inline'
    }
    document.getElementById(i).innerHTML=parseInt(count)-1
    let cartCount=document.getElementById('cartCount').innerHTML
    document.getElementById('cartCount').innerHTML=parseInt(cartCount)-1
    document.getElementById('cartCount').style.visibility='visible'

    let a=[]
    let newItem=''
    for (let i2 of props.oldCart){
      if (i2.split("~")[0]!=i.replace("_", " ")){
        a.push(i2)
      }else{
        const oldCount=parseInt(i2.split("~")[2])
        if (oldCount!=1){
          const newCount=oldCount-1
          a.push(i2.split("~")[0]+"~"+props.price+"~"+newCount.toString())
        }
      }
    }
    props.onBtnClicked(a)
  }

  function getCount(i){
    for (let i2 of props.oldCart){
      if (i2.split("~")[0]==i){
        return i2.split("~")[2]
      }else{
        // if (document.getElementById(i.replace(" ", "_")).innerHTML=='0'){
          // document.getElementById('itemCountButton'+i.replace(" ", "_")).style.display='none'
          // document.getElementById('btn'+i.replace(" ", "_")).style.display='inline'
        // }
        // document.getElementById('itemCountButton'+i.replace(' ', "_")).style.display='none'
        // document.getElementById('btn'+i.replace(' ', "_")).style.display='inline'
        return 0
      }
    }
  }



  return (
    <div className='item'>
        <div className="itemtxt">
            <span className="itemTitle">{props.title}&nbsp; <img src={veg ? vegicon : nonvegicon} alt='veg/nonveg' id='vegnonveg' /> </span>
            <span className="pricetxt"><span className="price">₹{props.price}</span></span>
        </div>
        <button className="addbtn" onClick={()=>{addItem(props.title.replace(" ", "_"))}} id={'btn'+props.title.replace(" ", "_")} ><HiPlus id='addicon' />&nbsp;Add</button>
        <div className="itemCountButton" id={'itemCountButton'+props.title.replace(" ", "_")}>
          <button id='plusone' onClick={()=>{onPlus(props.title.replace(" ", "_"))}}><BsPlusLg /></button>
          <span id={props.title.replace(" ", "_")} className='itemCount'>{getCount(props.title)}</span>
          <button id='minusone' onClick={()=>{onMinus(props.title.replace(" ", "_"))}} ><BsDashLg /></button>
        </div>
    </div>
  )
}

export default Item

// Half Full
// plus minus
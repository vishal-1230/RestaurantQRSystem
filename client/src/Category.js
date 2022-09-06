import React from 'react'


function Category(props) {
  return (
    <div className='catCard'>
        <img src={props.img} alt="" className="category" id={props.key} onClick={()=>{props.onclick(props.text)}} />
        <span className='catTxt'>{props.text}</span>
    </div>
  )
}

export default Category
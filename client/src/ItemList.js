import React, {useState} from 'react'
import Item from './Item'

function ItemList(props) {

  const [list, setlist] = useState('')
  const [listLoaded, setlistLoaded] = useState(false)

  async function getList(){
    const response=await fetch(`http://192.168.162.189:8000/getList?cat=${props.cat}`)
    const data=await response.json()
    setlist(JSON.stringify(data))
    console.log(data)
    setlistLoaded(true)
  }
  getList()
  
  return (
    <div className="itemslist">
      {
        listLoaded ? JSON.parse(list).map((i)=>{
          return <Item title={Object.keys(i)[0]} price={i[Object.keys(i)[0]][0]} veg={i[Object.keys(i)[0]][1]} oldCart={props.oldCart} onBtnClicked={props.onBtnClicked} />
        }):''
      }
      {/* <Item title='Masala Dosa' price='160' itemid='1' veg='true' />
      <Item title='Uttapam' price='180' itemid='2' veg='true' />
      <Item title='Vada Paav' price='120' itemid='3' veg='true' />
      <Item title='Chicken Korma' price='250' itemid='5' veg='false' />
      <Item title='Aloo Tikki' price='80' itemid='4' veg='true' />
      <Item title='Chicken Biryani' price='200' itemid='6' veg='false' />
      <Item title='Uttapam' price='180' itemid='2' veg='true' />
      <Item title='Vada Paav' price='120' itemid='3' veg='true' />
      <Item title='Aloo Tikki' price='80' itemid='4' veg='true' />
      <Item title='Chicken Korma' price='250' itemid='5' veg='false' />
      <Item title='Chicken Biryani' price='200' itemid='6' veg='false' /> */}
    </div>
  )
}

export default ItemList
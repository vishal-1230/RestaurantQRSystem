import React, {useState} from 'react'
import Category from './Category'
import i1 from './images/north.jpg'
import i2 from './images/chinese.webp'
import i3 from './images/south.jpg'
import i4 from './images/mughlai.jpg'
import i5 from './images/italian.webp'
import i6 from './images/dessert.jpg'

function Categories(props) {

  const images={
    'North Indian':i1,
    'South Indian':i3,
    'Chinese':i2,
    'Mughlai':i4,
    'Italian':i5,
    'Dessert':i6
  }

  const [cats, setcats] = useState('')
  const [catsLoaded, setcatsLoaded] = useState(false)

  async function getCategories(){
    const response=await fetch('http://192.168.162.189:8000/getCategories')
    const data=await response.json()
    console.log(data)
    setcats(JSON.stringify(data))
    setcatsLoaded(true)
  }
  getCategories()

  return (
    <div className='categories'>
        {catsLoaded ? JSON.parse(cats).map((i)=>{
          return <Category text={i} key='i' img={images[i]} onclick={props.onclick} />
        }):''}
        {/* <Category img={i1} text='North Indian' catid='1' />
        <Category img={i3} text='South Indian' catid='3' />
        <Category img={i2} text='Chinese' catid='2' />
        <Category img={i5} text='Italian' catid='5' />
        <Category img={i4} text='Mughlai' catid='4' />
        <Category img={i6} text='Dessert' catid='6' />
        <Category img={i1} text='North Indian' catid='7' />
        <Category img={i2} text='Dessert' catid='8' /> */}
    </div>
  )
}

export default Categories

// south indian
// desserts
// chinese
// north indian
// thai
// mughlai
// italian
// burgers
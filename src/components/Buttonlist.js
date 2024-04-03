import React from 'react'
import Button from './Button'

const buttonList = ['All', 'Gaming', 'Songs', 'News', 'Live', 'Cricket', 'Soccer', 'Cooking', 'Pop Music', 'Lessons', 'Guitar', 'Gaming', 'Gadgets', 'Bollywood Music'];
const Buttonlist = () => {
  return (
    <div className='flex'>
       {buttonList.map((ele)=> <Button name={ele}/>)}
    </div>
  )
}

export default Buttonlist
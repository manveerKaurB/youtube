import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
        <img className="w-12 h-12" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment
import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRamdomName, randomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=> store.chat.messages);
    const [liveMessage, setLiveMessage] = useState('');
    useEffect(()=>{
        const intrvl = setInterval(() => {
            // api polling
            dispatch(addMessage({
                name: generateRamdomName(),
                message: randomMessage(20)
            }));
        }, 2000);
        return() => clearInterval(intrvl);
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addMessage({
            name:'manveer',
            message: liveMessage
        }));
        setLiveMessage("");
    }
  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
            {/* dont use indexes as key */}
            {chatMessages.map((c,i)=> (
            <ChatMessage key={i} name={c.name} message={c.message}/>
            ))}
        </div>
    </div>
    <form className='w-full p-2 ml-2' onSubmit={handleSubmit}>
       <input className='w-[96] px-2 border border-black' type="text" onChange={(e)=>
    setLiveMessage(e.target.value)} value={liveMessage}/>
       <button className='px-2 mx-2 bg-green-100'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat
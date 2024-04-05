import React, { useState } from 'react'
import { findNthPrime } from '../utils/helper';
import { useMemo } from 'react';
const Demo = () => {
    const [text, setText] = useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // heavy operation
    // const prime = () => (findNthPrime(text));
    // memoize result of function with useMemoHook, memoize it in every re-render until my text changes i.e. until my dependencies change, cache my result
    const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-gray-900 text-white")}>
       <div>
        <button 
        className={'m-10 p-2 bg-green-100 ' + (isDarkTheme && 'text-black')}
        onClick={(e)=> setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>
       </div>
        <div>
            <input type="number" value={text} 
            className={'border border-black w-72 px-2 ' +  (isDarkTheme && 'text-black')} 
            onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div>
            {/* <h1 className='mt-4 font-bold'>nth Prime: {prime()}</h1> */}
            <h1 className='mt-4 font-bold'>nth Prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo
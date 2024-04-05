import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    console.log("rendering ...");
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <div>
            <button onClick={()=>{x++; console.log("x = " +x);}} className='bg-green-100 px-2 m-4'> Increase x</button>
            <span className='font-bold text-xl'>let = {x}</span>
        </div>
        <div>
            <button onClick={()=>{setY(y + 1); console.log("y = "+y);}} className='bg-green-100 px-2 m-4'> Increase y</button>
            <span className='font-bold text-xl'>state = {y}</span>
        </div>
        <div>
            <button onClick={()=>{ref.current++; console.log("ref = " +ref.current);}} className='bg-green-100 px-2 m-4'> Increase z</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span>
        </div>
    </div>
  )
}

export default Demo2
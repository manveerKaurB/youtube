import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <div className='flex flex-col'>
     <div className='px-5'>
        <iframe width="1000" height="500" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frame-border="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>   
        </iframe>
    </div>
    <CommentsContainer/>
    </div> 
  )
}

export default WatchPage
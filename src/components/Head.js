import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=> store.search);
  /**
   * {
   *    "iphone": ["iphone 11", "iphone 14"]
   * }
   */
  useEffect(()=> {
    // api call
    // make an api call after every keypress
    // but if the difference between 2 api calls is <200ms 
    // decline the api call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions();
      }  
    }, 200);  
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  /**
   * key - i
   *  - render the component 
   *  - useEffect();
   *  - start timer => make api call after 200ms
   * 
   * key - ip
   *  - destroy the component (call return method of useEffect that will clear timeout)
   *  - render the component
   *  - useEffect()
   *  - start timer => make api call after 200ms 
   * 
   * setTimeout(200) - make an api call
   */

  const getSearchSuggestions = async() => {
    console.log(searchQuery);
    const data = await  fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    setShowSuggestions(true);
    //update cache
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  }
  const toggleMenuHandler = () => {
      dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
          <img className='h-8 cursor-pointer' 
            onClick={()=>toggleMenuHandler()}          
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC" alt="menu"/>
          <img className='h-8 mx-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="youtube-logo"/>
      </div>
      <div className='col-span-10 text-center'>
        <div>
        <input type="text" 
          className='w-1/2 px-5 border border-gray-400 p-2 rounded-l-full'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={(e)=>setShowSuggestions(false)}
          onFocus={(e)=>setShowSuggestions(true)}/>
        <button className='border border-gray-400 p-2 px-3 rounded-r-full bg-gray-100'>
          🔍
        </button>
        </div>
        {showSuggestions && 
        <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border-gray-100'>
        <ul>
          {suggestions.map((suggestion)=>  <li className='py-2 spx-3 hadow-sm hover:bg-gray-100' key={suggestion}>🔍 {suggestion}</li>)}
        </ul>
      </div> 
        }
        
      </div>
      <div className='col-span-1'>
        <img className="h-8" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user"/>
      </div>
    </div>
  )
}

export default Head
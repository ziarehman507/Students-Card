import React from 'react'
import wellcom from "../image/wellcom.jpg"



function Home() {
  return (
    <div className='main'>
        <div className='app'>
            
        <img src={wellcom} />

        
        </div>

        <div className='input'>
        <input className='inputtext' type='text'></input>
        <button className='button'>Search</button>
        </div>
       
    </div>
  )
}

export default Home
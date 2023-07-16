import React from 'react'
import backimge from "../image/backimge.jpg"
import ayan from "../image/ayan.jpg"
import { useNavigate } from 'react-router-dom';



function Home() {

  const navigate = useNavigate();




  return (
    <div className='main'>

        <div style={{}}>    
        <img style={{width:1366,height:660,}} src={backimge} />
        <img style={{position:'absolute',marginTop:-620,height:100,borderRadius:10,marginLeft:150}} src={ayan}/>
<button className='homebutton'onClick={()=> navigate('/card')}>Student Information</button>
        
        </div>
       
    </div>
  )
}

export default Home
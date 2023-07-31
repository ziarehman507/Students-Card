import React, { useEffect } from 'react'
import backimge from "../image/backimge.jpg"
import ayan from "../image/ayan.jpg"
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { replace } from 'formik';



function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth()
  },[])

const checkAuth = () => {
  const isLogin = localStorage.getItem('user')
  if (!isLogin){
    navigate('/Login', {replace: true})
  }



}
const handleLogOut = () => {
  localStorage.removeItem('user')
  navigate('/Login', {replace: true})

}


  return (
    <div>

        <div>    
        <img style={{}} src={backimge} />
        <img style={{position:'absolute',marginTop:-620,height:100,borderRadius:10,marginLeft:150}} src={ayan}/>

        <button className='LogOut'onClick={handleLogOut}>LogOut</button>

<button className='homebutton'onClick={()=> navigate('/card')}>Student Information</button>
        
        </div>
       
    </div>
  )
}

export default Home
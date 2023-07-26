import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firestore';
// import 'firebase/storge';
import './Signup.css';


function Signup() {

const navigate = useNavigate ()

const [name,setName] = useState ("")
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")
const [number,setNumber] = useState("")

const fireAuth = firebase.auth()
const fireStore = firebase.firestore()

const saveuserData = async  (uid) => {
try {
  const payload = {
    name:name,
    email,
    pass,
    number
  }
  await fireStore.collection('Student_Card')
  .doc (uid)
  .set (payload)
  navigate('/Login')

} catch (error) {
  
}}



const handleSingup  = async () => {
try {

 const authRes =  await fireAuth .createUserWithEmailAndPassword(email,pass)
  console.log ('user uid', authRes.user.uid)
  saveuserData(authRes.user.uid)
// navigate('/Login')
} catch (error) {
  console.log(error.message)
  
}
}
  return (
    <div className="maindivsingup">
<br/> 


<h1 style={{  marginLeft:'35%' }}> SingUp </h1>
<br/> 


<input className="inputname" onChange={e => setName(e.target.value)} value={name} type= "text" placeholder="Enter your Name"/>
<br/><br/>
<input className="inputemail" onChange={e => setEmail(e.target.value)} value={email} type= "email" placeholder="Enter your Email"/> 
<br/><br/>
<input className="inputpass" onChange={e => setPass(e.target.value)} value={pass} type= "text" placeholder="Enter your Password"/>
<br/><br/>
<input className="inputnumber" onChange={e => setNumber(e.target.value)} value={number} type= "text" placeholder="Mobile Number"/>
<br/><br/>



      <button className="singupbtn" onClick={handleSingup}> SingUp </button>
<br/> <br/> <br/>
<button className="gotologin" onClick={() => navigate('/Login')}>Go To Login</button>


    </div>
  );
}

export default Signup;

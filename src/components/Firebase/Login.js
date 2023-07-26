import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom'
import  "firebase/auth";
import swal from 'sweetalert';
import "firebase/firestore";
import firebase from "firebase";
import './Login.css';



function Login() {
const navigate = useNavigate ()

const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

const fireAuth = firebase.auth()



const handleLogin  = async () => {
  try {

    const authRes =  await fireAuth .signInWithEmailAndPassword(email,pass)
     console.log ('user uid', authRes.user.uid)
     const Fulldata = await firebase.firestore()
     .collection('Student_Card')
     .doc(authRes.user.uid)
     .get()
     console.log (" ~handleLogin ~ Fulldata",Fulldata.data())

     const payload = {
      uid:authRes.user.uid,
      ... Fulldata.data()
     }
     swal({
      title: "Good job!",
      text: "Wellcome " + payload.name,
      icon: "success",
    });
     localStorage.setItem('user',JSON.stringify(payload))
   navigate('/',{replace: true})
   } catch (error) {
    swal({
      title: error.message,
      icon: "warning"
    });
     console.log(error.message)
     
   }
}


 
  return (
    <div className="App">
      <br/> <br/>
      
      

<div className="manlogin">
<h1> Login </h1>
<br/> <br/>


<input className="email" onChange={e => setEmail(e.target.value)} value={email} type= "email" placeholder="Enter your Email"/> 
<br/>
<br/>
<input className="password" onChange={e => setPass(e.target.value)} value={pass} type= "password" placeholder="Enter your Password"/>

<br/><br/><br/><br/>

      <button  className="loginbtn" onClick={handleLogin}> Login </button>
      <br/> <br/> <br/>
      <button className="newaccount" onClick={() => navigate('/Signup')}>Create New Account</button>

      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import firebase from "firebase";
import  "firebase/auth";
import 'firebase/firestore';
// import 'firebase/storge';
import './Signup.css';
import Check from "./Check";
import swal from 'sweetalert';


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
  swal({
    title: error.message,
    icon: "warning"
  });
}}



const handleSingup  = async () => {
try {

 const authRes =  await fireAuth .createUserWithEmailAndPassword(email,pass)
  console.log ('user uid', authRes.user.uid)
  saveuserData(authRes.user.uid)
// navigate('/Login')
} catch (error) {

  // console.log(error.message)
  
}
}
  return (
    <>
 
 
    < Check />
    </>
  );
}

export default Signup;

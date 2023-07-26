import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import firebase from "firebase";
import "firebase/firestore";
import "./addUser.css"




export default function AddUser() {
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [Dob, setDob] = useState("")
  const [Gender, setGender] = useState("")
  const [Mobile, setMobile] = useState("")
  const [image, setImage] = useState("")

  const fireStore = firebase.firestore();
  const fireStorage = firebase.storage();
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();
   
    try {
      uploadImage()
    } catch (error) {
      console.log(error)
    }



  }

  const uploadImage = () => {
    if (!image) {
      saveUserData(null)

      return;
    }
    let imageRef = fireStorage.ref().child('users').child(Date.now().toString())
    var uploadTask = imageRef.put(image);
    // let URL;

    uploadTask.on('state_changed', 
    function (snapshot) {
      var progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
      }
    }, 
    function (error) {
      console.log("Storage Error : ", error);
      saveUserData(null)


    },
      function () {

        uploadTask.snapshot.ref.getDownloadURL().then(
          function (downloadURL) {


            console.log('File available at', downloadURL);
            saveUserData(downloadURL)





            console.log(downloadURL);
          });
      });

    // return URL;
  }

  const saveUserData = async (url) => {
    try {

      const payload = {
        title,
        name,
        Dob,
        Gender,
        Mobile,
        image: url
      }

      await fireStore.collection('Users')
        .doc(Date.now().toString())
        .set(payload)
      navigate('/card')


    } catch (error) {

      console.log("Error : ", error);
    }
  }





  return (
    <div>
      <button style={{ backgroundColor: 'black', color: 'white', fontSize: 30, borderRadius: 10 }} onClick={() => navigate('/card')}>Go Back</button>

      <div className='user-main'>
        <br />

        <h1 style={{ textAlign: 'center' }}>Add User</h1>
        <br />
        <form onSubmit={submit} >
          <input className='inputTitle' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
          <br /> <br />
          <input className='inputName' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
          <br /> <br />
          <input className='inputDob' placeholder='Dob' value={Dob} onChange={e => setDob(e.target.value)} />
          <br /> <br />
          <input className='inputGender' placeholder='Gender' value={Gender} onChange={e => setGender(e.target.value)} />
          <br /> <br />
          <input className='inputMobile' placeholder='Mobile No' value={Mobile} onChange={e => setMobile(e.target.value)} />
          <br /> <br />

          <input className='inputFile' type='File' onChange={e => setImage(e.target.files[0])} />

          <br /> <br />




          <button className='ButtonSubmit' type="submit" >Submit</button>
        </form>

      </div>

    </div>


  )
}

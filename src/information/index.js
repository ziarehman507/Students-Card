import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../utils';
import CardItem from '../components/CardItem';
import Calander from '../components/Calander';
import Studentfees from '../components/Studentfees';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';


function Information() {
  const params = useParams();
  const [userData, setUserData] = useState();
  const firestore = firebase.firestore();

  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      firestore.collection('Users')
      .doc(params.id)
      .get()
      .then(res => setUserData(res.data()))
      .catch(err => console.log("Error ", err))
    }
  }, [params])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      // marginLeft:200
    }} >
      <button style={{ marginRight: 1000, marginTop: 20, backgroundColor: 'black', color: 'white', fontSize: 30, borderRadius: 10 }} onClick={() => navigate('/card')}>Go Back</button>
      <CardItem val={userData} />
      <Calander userId={params.id} />
      <Studentfees userId={params.id} />

    </div>



  )
}



export default Information
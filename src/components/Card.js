import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css';
import CardItem from './CardItem';
import firebase from 'firebase'







function Card() {
  const [searchTerm, setSearchTerm] = useState("")
  const [data, setData] = useState([])

  const navigate = useNavigate();
  const firestore = firebase.firestore();



  useEffect(() => {
    firestore.collection('Users').get().then(res => {
      let temp = [];
      console.log("Res ", res.docs)
      res.docs.forEach((item) => {
        temp = [...temp, { ...item.data(), ref: item.id, id: item.id }]
      })
      setData(temp)
    })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleClick = (userId) => {
    console.log("Users ", userId)
    navigate(`/details/${userId}`)
  }

  const Logout = () => {
    localStorage.removeItem('user')
    navigate('/Login', { replace: true })

  }
  const AddUser = () => {
    navigate('/Adduser')

  }


  return (
    <div className='card-cantainer-main' >

      <div className='input-container' >
        <input className='search-input' type='text' placeholder='Search...'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className='btn-container' >
        <button className='Cardadduser' onClick={AddUser}>Add Student</button>
        <button className='Cardlogout' onClick={Logout}>LogOut</button>

      </div>





      <div className='cantainer'>




        {data.filter((val) => {
          if (searchTerm == "" || !searchTerm) {
            return val
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          } else if (val.Mobile.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }

        }).map((val) => {
          return (
            <CardItem key={val.id} val={val} handleClick={handleClick} />
          );
        })}

      </div>





    </div>
  )
}





export default Card
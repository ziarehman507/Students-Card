import React from 'react'
import './styles.css'

function CardItem({val, handleClick= ()=>{} }) {

  return (
    <div onClick={() => handleClick(val?.id)} >
      
                <div className='card-container'>
      
                  <h1 className='title-canatiner'> Ayan Tech {val?.title}</h1>

                  <img className='card-img-container' src={val?.image} />
                  <h4 className='name-canatiner' >Name : {val?.name}</h4>
                  <h4 className='date-canatiner' >DOB : {val?.date}</h4>
                  <h4 className='month-canatiner' >-{val?.month}</h4>
                  <h4 className='year-canatiner' >-{val?.year}</h4>
                  <h4 className='gender-canatiner' >Gender : {val?.selected}</h4>
                  <h4 className='mobil-canatiner'>Mobile No : {val?.Mobile}</h4>
                </div>
                <div>
                  
                   </div>
              </div>
  )
}

export default CardItem
import React from 'react'

import "./card.css"

function Card() {
  return (
    <div className='div1'>
      <div className='h1'><h1>ATIF KHAN</h1></div>
      <p1>FATHER NAME</p1>
      <p2>AMIR KHAN</p2>
      <div>
        <p1>CNIC</p1>
        <div className='cn'><p2>0201030405</p2></div>
        <p1 className='ce'>Date of birth</p1>
        <div className='cd'><p2>19/04/2003</p2></div>

      </div>
    </div>
  )
}
export default Card
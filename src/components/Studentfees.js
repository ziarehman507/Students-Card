import React, { useState } from 'react';

function Studentfees() {
  const [monthlyFees, setMonthlyFees] = useState([]);

  const handleAddFee = (event) => {
    event.preventDefault();

    // const month = event.target.month.value;
    const date = event.target.date.value;
    const fee = parseFloat(event.target.fee.value);

    const newFee = {  date, fee };

    setMonthlyFees([...monthlyFees, newFee]);

    // Reset the form fields
    event.target.reset();
  };

  return (
    <div style={{marginTop:50}}>
      <h1>Student Monthly Fees</h1>
      <form onSubmit={handleAddFee}>
        {/* <label htmlFor="month">Month:</label>
        <input type="text" id="month" name="month" required /> */}

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="fee">Rs:</label>
        <input type="number" placeholder='$' id="fee" name="fee" step="0.01" required />

        <button type="submit">Add</button>
      </form>

      <h2>Monthly Fees:</h2>
      <ul>
        {monthlyFees.map((fee, index) => (
        <li key={index}>
           <h3>  <span>{fee.date}</span>   : $ <span>{fee.fee}</span></h3>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Studentfees;


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import {data} from '../utils';


// import './card.css';
// import CardItem from './CardItem';




// function Card() {
//   const [searchTerm, setSearchTerm] = useState("")

//   const navigate = useNavigate();
  
// const handleClick = (userId) => {
//   console.log("User ", userId)
//   navigate(`/details/${userId}`)
// }


//   return (
//     <div className='card-cantainer-main' >

//       <input className='search-input' type='text' placeholder='Search...'
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />

//       <div className='cantainer'>
        
//           {data.filter((val) => {
//             if (searchTerm == "") {
//               return val
//             } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//               return val
//             } else if (val.Mobil.toLowerCase().includes(searchTerm.toLowerCase())) {
//               return val
//             }

//           }).map((val) => {
//             return (
//               <CardItem key={val.id} val={val} handleClick={handleClick} />
//             );
//           })}
          
//       </div>





//     </div>
//   )
// }













// // function Card() {



// //   return (

// //     <div style={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>


// //       <>
// //     {
// //       data.map((val)=>(
// //     <div className='card-conatiner' >

// //       <h1 className='title-canatiner'>{val.title}</h1>

// //       <img className='img-canatiner' src={val.Image}/>

// //       <h4 className='name-canatiner'>{val.name}</h4>
// //       <h4 className='dob-canatiner'>{val.Dob}</h4>
// //       <h4 className='gender-canatiner'>{val.Gender}</h4>
// //       <h4 className='mobil-canatiner'>{val.Mobil}</h4>



// //     </div>

// //       ))
// //     }
// //   </>




// //     </div>
// //   )
// // }
// export default Card
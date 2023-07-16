import React from 'react'

function Card() {
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate();
  
const handleClick = (userId) => {
  console.log("User ", userId)
  navigate(`/details/${userId}`)
}


  return (
    <div>Card1</div>
  )
}













// function Card() {



//   return (

//     <div style={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>


//       <>
//     {
//       data.map((val)=>(
//     <div className='card-conatiner' >

//       <h1 className='title-canatiner'>{val.title}</h1>

//       <img className='img-canatiner' src={val.Image}/>

//       <h4 className='name-canatiner'>{val.name}</h4>
//       <h4 className='dob-canatiner'>{val.Dob}</h4>
//       <h4 className='gender-canatiner'>{val.Gender}</h4>
//       <h4 className='mobil-canatiner'>{val.Mobil}</h4>



//     </div>

//       ))
//     }
//   </>




//     </div>
//   )
// }
export default Card
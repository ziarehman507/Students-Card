import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import "firebase/firestore";


function Studentfees({userId}) {
  const [monthlyFees, setMonthlyFees] = useState([]);
  const [monthly, setMonthly] = useState('');
  const [Fees, setFees] = useState('');
  const [fetchData, setFetchData] = useState(true);


  const fireStore = firebase.firestore();


  

  const handleAddFee =  async (event) => {
    event.preventDefault();

    try {
      if(!userId) return
       
      const payload = {
        monthly,
        Fees,
        
       
      }
      
      await fireStore.collection('userRecord')
        .doc(userId)
        .collection('fees')
        .doc(Date.now().toString())
        .set(payload) 
      setFetchData(true);
    } catch (error) {
      console.log("Error : ", error);
    }

    setMonthly('')
    setFees('')

    // const month = event.target.month.value;
    const date = event.target.date.value;
    const fee = parseFloat(event.target.fee.value);

    const newFee = {  date, fee };

    // setMonthlyFees([...monthlyFees, newFee]);

    // Reset the form fields
    event.target.reset();
  };

  useEffect(() => {
    if(fetchData)
    {
      fireStore.collection('userRecord').doc(userId).collection('fees').get()
      .then(res => {
        let temp = [];
        res.docs.forEach((item) => {
          temp = [...temp, { ...item.data(), ref: item.id, id: item.id }]
        })
  
        console.log("Temp : ", temp)
        setMonthlyFees(temp)
      })
      setFetchData(false);
    }
    
  }, [fetchData])

  console.log("user ", userId)

  return (
    <div style={{marginTop:50}}>
      <h1>Student Monthly Fees </h1>
      <form onSubmit={handleAddFee}>
        {/* <label htmlFor="month">Month:</label>
        <input type="text" id="month" name="month" required /> */}

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required value={monthly} onChange={e => setMonthly(e.target.value)} />

        <label htmlFor="fee">Rs:</label>
        <input type="number" placeholder='$' id="fee" name="fee" step="0.01" required value={Fees} onChange={e => setFees(e.target.value)}/>

        <button type="submit">Add</button>
      </form>

      <h2>Monthly Fees:</h2>
      <ul>
        {monthlyFees.map((fee, index) => (
        <li key={index}>
           <h3>  <span>{fee.monthly}</span>   : $ <span>{fee.Fees}</span></h3>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Studentfees;

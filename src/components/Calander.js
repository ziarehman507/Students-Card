

import React, { useEffect, useState } from 'react';
import firebase from "firebase";

const Calander = ({ userId }) => {

  // Initial attendance data, assuming 30 days in a month
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [monthDates, setMonthDates] = useState([])


  const fireStore = firebase.firestore();

  useEffect(() => {
    if (!userId) return;
    
    fireStore.collection('userRecord').doc(userId).collection('attendance').get()
      .then(res => {
        let temp = [];
        let dates = monthDates;
        console.log("Res ", res.docs)
        res.docs.forEach((item) => {
          temp.push(item.data())
        })

        dates = dates.map(item =>  {
          let curr = item.date.getDate() + '-' + (item.date.getMonth()+1) + '-' + item.date.getFullYear();
          let isPresent = item.isPresent;
          temp.forEach(itemX => {
            console.log("Cuu ", curr)
            if(itemX.date === curr)
            {
              isPresent = itemX.isPresent;
            }
          })
  
          return {date: item.date, isPresent}
        })
        setMonthDates(dates)
        console.log("Temp attandence : ", dates)
      })
      .catch(err => console.log("Error ", err))
      

      // console.log("xxxxxxxx",dates)

  }, [userId, monthDates])

  useEffect(() => {
    setSelectedDate(new Date());
    let dates = getMonthDates(new Date());
    dates = dates.map(item => ({ date: item, isPresent: false }))
    setMonthDates(dates)
  }, [])

  // const handleCheckboxChange = async (index) => {

  //   const updatedAttendance = [...monthDates];
  //   _uploaddata(!updatedAttendance[index].isPresent, updatedAttendance[index].date);
  //   updatedAttendance[index] = { date: updatedAttendance[index].date, isPresent: !updatedAttendance[index].isPresent }
  //   console.log(updatedAttendance[index], index)
  //   setMonthDates(updatedAttendance);
  // }

  const _uploaddata = async (index) => {

    const updatedAttendance = [...monthDates];
    const isPresent = !updatedAttendance[index].isPresent;
    const date = updatedAttendance[index].date;

    const payload = {
      date: `${new Date(date).getDate()}-${new Date(date).getMonth() + 1}-${new Date(date).getFullYear()}`,
      isPresent
    }

    try {
      await fireStore.collection('userRecord')
        .doc(userId)
        .collection('attendance')
        .doc(Date.now().toString())
        .set(payload)

      updatedAttendance[index] = { date: date, isPresent: isPresent }
      // console.log(updatedAttendance[index], index)
      setMonthDates(updatedAttendance);
      console.log("Data : ", payload)

    } catch (error) {
      console.log("Error ", error)
    }

  }

  const _getFormat = (date) => {
    let month = '';
    let year = date.getFullYear();
    if(date.getMonth()+1 < 10)
    {
      month = '0'+(date.getMonth()+1);
    }

    return `${year}-${month}`
  }



  console.log("Months : ", `${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}`)

  return (
    <div style={{ marginTop: 10 }}>
      <h1>Student Attendance Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{selectedDate.toLocaleString('en-US', {
              year: 'numeric', month: 'long'
            })}</td> */}

            <td> <input type='month' value={_getFormat(selectedDate)} onChange={(e) => {
              setSelectedDate(new Date(e.target?.value));
              let dates = getMonthDates(e.target?.value);
              dates = dates.map(item => ({ date: item, isPresent: false }))
              setMonthDates(dates)
            }} /> </td>

            <td>
              {monthDates.map((item, index) => (
                <>
                <label style={{ marginLeft: 5 }} key={index}>{item?.date?.getDate()}
                </label>
                  <input
                    type="checkbox"
                    checked={item?.isPresent}
                    onChange={() => _uploaddata(index)}
                  />
                </>
                  
              ))}
            </td>
          </tr>
          {/* Add more rows for each month */}
        </tbody>
      </table>
    </div>
  );
};




function getMonthDates(currDate) {
  const currentDate = new Date(currDate) // Get current date
  const year = currentDate.getFullYear(); // Get current year
  const month = currentDate.getMonth(); // Get current month (0-based index)

  // Get the total number of days in the current month
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = [];

  // Loop through each day of the month
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day);
    dates.push(date);
  }

  return dates;
}


export default Calander;


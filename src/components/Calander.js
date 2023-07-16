

import React, { useState } from 'react';

const Calander = ({user}) => {

  // Initial attendance data, assuming 30 days in a month
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [monthDates, setMonthDates] = useState([])

  const handleCheckboxChange = (index) => {
    const updatedAttendance = [...monthDates];
    updatedAttendance[index] = { date:  updatedAttendance[index].date, isPresent: !updatedAttendance[index].isPresent  }
    console.log(updatedAttendance[index], index)
    setMonthDates(updatedAttendance);
  };

console.log("Months : ", monthDates)

  return (
    <div style={{marginTop:50}}>
      <h1>Student Attendance Tracker</h1>
      <h1>{user?.name}</h1>
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
            
            <td> <input type='month' onChange={(e) => {
              setSelectedDate(new Date(e.target?.value));
              let dates = getMonthDates(e.target?.value);
              dates = dates.map(item => ({date: item, isPresent: false}))
              setMonthDates(dates)
            }} /> </td>

            <td>
              {monthDates.map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={item?.isPresent}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {item?.date?.getDate()}
                </label>
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


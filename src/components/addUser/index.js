import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import firebase from "firebase";
import "firebase/firestore";
import "./addUser.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';





export default function AddUser({ colsePopup }) {

  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date().getDate().toString())
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString())
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [Mobile, setMobile] = useState("")
  const [image, setImage] = useState("")
  const [selected, setSelected] = useState("");
  const [open, setOpen] = React.useState(false);



  const fireStore = firebase.firestore();
  const fireStorage = firebase.storage();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    // Regular expression to allow only alphabets and spaces
    const regex = /^[A-Za-z ]*$/;
    const value = e.target.value;

    if (regex.test(value)) {
      setName(value);
    }
  };



  const submit = async (e) => {

    e.preventDefault();
    
    console.log("e", e)

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
        name,
        date,
        month,
        year,
        selected,
        Mobile,
        image: url
      }

      await fireStore.collection('Users')
        .doc(Date.now().toString())
        .set(payload)
        .then(() => colsePopup())

      // navigate('/card')



    } catch (error) {

      console.log("Error : ", error);
    }

    setName('')
  setMobile('')
  setImage('')
  setSelected('')

  }
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };





  return (
    <div>



      <div className='user-main'>
        <br />

        <h1 style={{ textAlign: 'center' }}>Add User</h1>
        <br />
        <form onSubmit={submit} >
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

          <input required className='inputName' type='text' placeholder='Enter Your Name'
            value={name} onChange={handleInputChange}

          />

          <br /> <br />

          <select  defaultValue={date} style={{ height: 40, width: 90, fontSize: 20, marginLeft: 40, borderRadius: 5 }} placeholder='day' title="Day" onChange={e => setDate(e.target.value)} > <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29" >29</option><option value="30">30</option><option value="31">31</option></select>
          <select  defaultValue={month} style={{ height: 40, width: 90, fontSize: 20, marginLeft: 15, borderRadius: 5 }} title="Month" onChange={e => setMonth(e.target.value)} ><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select>
          <select  defaultValue={year} style={{ height: 40, width: 90, fontSize: 20, marginLeft: 15, borderRadius: 5 }} title="Year" onChange={e => setYear(e.target.value)} ><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option></select>

          <br /> <br />

          <input required className='inputMobile' type='number' placeholder='Mobile No'
            value={Mobile} onChange={e =>
              setMobile(e.target.value)} />
          <br />
          <br />

          <div style={{ marginLeft: 40, fontSize: 30 ,height:50,width:145,backgroundColor:'white',borderRadius:5 }} >
          &nbsp; Male&nbsp;
            <input style={{height:15,width:15,marginLeft:20}}
              type="radio"
              name="answer"
              value="Male"
              onChange={e => setSelected(e.target.value)}
            />
          </div>

          <div style={{ marginLeft: 195,marginTop:-50, fontSize: 30 ,height:50,width:145,backgroundColor:'white',borderRadius:5 }}>
          &nbsp;Female&nbsp;

            <input style={{height:15,width:15}}
              type="radio"
              name="answer"
              value="Femle"
              onChange={e => setSelected(e.target.value)}
            />
          </div>
          <br />
          


          <input required className='inputFile' type='File' onChange={e => setImage(e.target.files[0])} />

          <br /> <br />




          <button className='ButtonSubmit' type="submit" onClick={handleOpen} > Submit</button>
        </form>

      </div>

    </div>


  )
}





import React from 'react'
import './components/Auth.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


import Home from '../src/components/Home';
import Card from '../src/components/Card';
// import Auth from '../src/components/Auth';
import Information from './information';
import Calander from './components/Calander';
import Studentfees from './components/Studentfees';



import  Login  from './components/Firebase/Login';
import Signup from './components/Firebase/Signup';

import firebase from "firebase";
import AddUser from './components/addUser';
// import  Modal  from './components/Model';







const routes = createBrowserRouter([
  // {path:'/', element: <Auth/>},
  {path:'/Card', element: <Card/>},
  {path:'/Calander', element: <Calander/>},
  {path:'/Studentfees', element: <Studentfees/>},
  {path: '/details/:id', element: <Information /> },
  {path:'/', element: <Home/>},
  {path:'/Login', element: <Login/>},
  {path:'/Signup', element: <Signup/>},
  {path:'/Adduser', element: <AddUser/>},
  // {path:'/Model', element: <Modal/>},






])




const firebaseConfig = {
  apiKey: "AIzaSyDo2mv7S4ofn6MBxwDZj4mO0y1tC7YWE8w",
  authDomain: "student-card-b2127.firebaseapp.com",
  projectId: "student-card-b2127",
  storageBucket: "student-card-b2127.appspot.com",
  messagingSenderId: "764352700190",
  appId: "1:764352700190:web:ec184d967a90eea6f0b30f"
};
firebase.initializeApp(firebaseConfig);


function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
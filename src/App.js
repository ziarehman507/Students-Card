import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from './components/Home';
import Card from './components/Card';
import SeachBar from './components/SeachBar';
import Auth from './components/Auth';





const routes = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/Card', element: <Card/>},
  {path: '/SeachBar', element: <SeachBar/>},
  {path: '/Auth', element: <Auth/>},

 
])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
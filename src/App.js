import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


import Home from '../src/components/Home';
import Card from '../src/components/Card';
import Auth from '../src/components/Auth';
import SeachBar from '../src/components/SeachBar'


const routes = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/Card', element: <Card/>},
  {path:'/SeachBar', element: <SeachBar/>},
  {path:'/Auth', element: <Auth/>},


])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
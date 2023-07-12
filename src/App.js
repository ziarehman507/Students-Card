import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from './Compunants/Home';
import Card1 from './Compunants/Card1';
import Card2 from './Compunants/Card2';

//atif
///zia

const routes = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/Card1', element: <Card1/>},
  {path: '/Card2', element: <Card2/>},
 
])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
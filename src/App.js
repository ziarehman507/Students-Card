import React from 'react'
import './components/Auth.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


import Home from '../src/components/Home';
import Card from '../src/components/Card';
import Auth from '../src/components/Auth';
import Information from './information';
import Calander from './components/Calander';
import Studentfees from './components/Studentfees';


const routes = createBrowserRouter([
  {path:'/', element: <Auth/>},
  {path:'/Card', element: <Card/>},
  {path:'/Calander', element: <Calander/>},
  {path:'/Studentfees', element: <Studentfees/>},
  {path: '/details/:id', element: <Information /> },
  {path:'/Home', element: <Home/>},



])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

<<<<<<< HEAD
import Home from '../src/components/Home';
import Card from '../src/components/Card';
import Auth from '../src/components/Auth';
import SeachBar from '../src/components/SeachBar'
=======
import Home from './components/Home';
import Card from './components/Card';
import SeachBar from './components/SeachBar';
import Auth from './components/Auth';



>>>>>>> bef31913e5c0ad40ea1d73f00efe73fba096ab43


const routes = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/Card', element: <Card/>},
<<<<<<< HEAD
  {path: '/Auth', element: <Auth/>},
  {path: '/Seachbar', element: <SeachBar/>},
=======
  {path: '/SeachBar', element: <SeachBar/>},
  {path: '/Auth', element: <Auth/>},

>>>>>>> bef31913e5c0ad40ea1d73f00efe73fba096ab43
 
])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
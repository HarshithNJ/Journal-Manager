import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Register from './Routers/Register'
import Login from './Routers/Login'
import Navbar from './Routers/Navbar'

const App = () => {

  let routers = createBrowserRouter([
    // {
    //   path : "/",
    //   element : <Navigate to="/register" replace = {true}/>
    // },
    {
      path : "/",
      element : <Navbar />,
      children : [
        {
          path : "/register",
          element : <Register></Register>
        },
        {
          path : "/login",
          element : <Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router = {routers}></RouterProvider>
    </div>
  )
}

export default App
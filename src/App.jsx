import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Navbar from './Routers/Navbar'
import Register from './Routers/Register'
import AddJournal from './Routers/AddJournal'
import ViewJournal from './Routers/ViewJournal'
import UpdateJournal from './Routers/UpdateJournal'
import Login from './Routers/Login'


let routers = createBrowserRouter([
    {
        path : "/",
        element : <Navigate to="/login"></Navigate>
    },
    {
        path : "/",
        element : <Navbar />,
        children : [
            {
                path : "/register",
                element : <Register />
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/add",
                element : <AddJournal />
            },
            {
                path : "/view",
                element : <ViewJournal />
            },
            {
                path : "/update",
                element : <UpdateJournal />
            }
        ]
    }
])
const App = () => {
  return (
    <div>
        <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
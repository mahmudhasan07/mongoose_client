import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Additem from './components/Additem.jsx'
import Items from './components/Items.jsx'
import User from './components/User.jsx'
import AddUser from './components/AddUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children :[
      {
        path : "/additems",
        element : <Additem></Additem>
      },
      {
        path : '/items',
        element : <Items></Items>
      },
      {
        path : "/items/:id",
        element : <UpdateUser></UpdateUser>
      },
      {
        path : "/usersInfo",
        element : <User></User>
      },
      {
        path : '/addUser',
        element : <AddUser></AddUser>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)

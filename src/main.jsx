import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Additem from './components/Additem.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children :[
      {
        path : "/additems",
        element : <Additem></Additem>
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

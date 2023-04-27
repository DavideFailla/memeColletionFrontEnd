import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider,
  createBrowserRouter 
} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Pack from './components/pack'
import Albums from './components/albums'

import Root from './components/root'
import Home from './components/home'
import ContactUs from './components/contactUs'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/pack",
        element: <Pack />
      },
      {
        path: "/contacts",
        element: <ContactUs />
      },
      {
        path: "/albums",
        element: <Albums />
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

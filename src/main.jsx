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

import Root from './components/root'
import Home from './components/home'
import ContactUs from './components/contactUs'
import Duplicates from './components/duplicates'
import ShowAlbum from './components/showCard'
import Album, {
  albumLoader
} from './components/Album'
import Albums from './components/albums'



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
        path: "/duplicates",
        element: <Duplicates/>
      },
      {
        path: "/albums",
        element: <Albums />,
        children: [
          {
            path: "/albums/:edition",
            element: <Album />,
            loader: albumLoader,
          },
        ],
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

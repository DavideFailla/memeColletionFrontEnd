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
import Duplicates from './components/duplicates'
import OgAlbum from './components/ogAlbum'
import GenZAlbum from './components/genZAlbum'



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
            path: "/albums/og",
            element: <OgAlbum />
          },
          {
            path: "/albums/gen-z",
            element: <GenZAlbum />
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

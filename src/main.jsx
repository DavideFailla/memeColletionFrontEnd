import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider,
  createBrowserRouter 
} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Packs from './components/packs'

import Root from './components/root'
import Home from './components/home'
import ContactUs from './components/contactUs'
import Duplicates, { duplicateLoader } from './components/duplicates'
import ShowAlbum from './components/showCard'
import Album, {
  albumLoader
} from './components/album'
import Albums from './components/albums'
import ErrorPage from './components/error-page'
import Pack, { packLoader } from './components/pack'
import Memes, { memeLoader } from './components/memes'



const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        index: true,
        element: <Login />,
        errorElement: <div>Email o password errati</div>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/pack",
        element: <Packs/>,
        errorElement: ErrorPage,
        children : [
          {
            path: "/pack/:edition",
            element : <Pack/>,
            loader : packLoader,
          },
        ],
      },
      {
        path: "/contacts",
        element: <ContactUs />
      },
      {
        path: "/duplicates",
        element: <Duplicates/>,
        loader : duplicateLoader,
        errorElement : <div>Non ci sono duplicati!</div>
      },
      {
        path: "/memes",
        element: <Memes/>,
        loader: memeLoader,
        errorElement : ErrorPage,
      },
      {
        path: "/albums",
        element: <Albums/>,
        errorElement : ErrorPage,
        children: [
          {
            path: "/albums/:edition",
            element: <Album/>,
            loader: albumLoader,
            errorElement : <div>Album vuoto!</div>
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

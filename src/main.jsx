import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider,
  createBrowserRouter 
} from 'react-router-dom'
import Login from './components/login'


const router = createBrowserRouter([
  
  {
    path: "/",
    children:[
      {
        children: [
          {
            path: "/login",
            element: <Login/>
          },
        ]
      }
    ], 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import Ai from './components/Ai.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Shortlist from './components/Shortlist.jsx'
import MoreInfo from './components/MoreInfo.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App style="duration-200"/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/Short-List",
        element:<Shortlist/>
      },
      {
        path:"/Ai-Prompt",
        element:<Ai/>
      },
      {
        path:"/MoreInfo",
        element:<MoreInfo/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)

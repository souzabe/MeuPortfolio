import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from '/src/pages/About.jsx'
import Home from '/src/pages/Home.jsx'
import Resume from '/src/pages/Resume.jsx'
import Projects from '/src/pages/Projects.jsx'
import DetalhesProjetos from '/src/pages/DetalhesProjetos.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const roots = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Resume",
        element: <Resume/> 
      },
      {
        path: "/Projetos/:id",
        element: <DetalhesProjetos/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={roots}/>
  </StrictMode>,
)

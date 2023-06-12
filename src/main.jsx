import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from "./App"

import "./index.css"
import SectionsLayout from './layouts/SectionsLayout'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import WackApp from "./pages/wack-a-mole/WackApp"


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/details',
    element: <SectionsLayout />,
    children: [
      {
        path: "/details/aboutme",
        element: <AboutMe />
      },
      {
        path: "/details/projects",
        element: <Projects />
      },
    ]
  },
  {
    path:'/projects',
    element: <Projects />,
  },
  {
    path:'/wackamole',
    element: <WackApp />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

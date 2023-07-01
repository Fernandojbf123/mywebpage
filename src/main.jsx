import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from "./App"

import "./index.css"
import SectionsLayout from './layouts/SectionsLayout'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import WackApp from "./pages/wack-a-mole/WackApp"
import DrumApp from './pages/drumkit/DrumApp'
import MemoramaApp from './pages/memorama/MemoramaApp'
import FitnessApp from './pages/fitness-music/FitnessApp'
import TeslaClone from './pages/tesla/TeslaClone'
import CryptoApp from './pages/cryptoQuoter/cryptoApp'
import BudgetApp from './pages/budget/BudgetApp'

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
  {
    path:'/memorama',
    element: <MemoramaApp />,
  },
  {
    path:'/drumkit',
    element: <DrumApp />,
  },
  {
    path:'/fitness',
    element: <FitnessApp />,
  },
  {
    path:'/crypto-quoter',
    element: <CryptoApp />,
  },

  {
    path:'/budget',
    element: <BudgetApp />,
  },
  

  {
    path:'/tesla',
    element: <TeslaClone />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

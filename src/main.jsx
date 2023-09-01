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
import RandomDataFromAPI from './pages/interviews/RandomDataFromAPI'
import WeatherApp from './pages/WeatherApp/WeatherApp'
import NewsApp from './pages/NewsApp/NewsApp'
import BeverageApp from './pages/BeverageReceiptSearcher/BeverageApp'

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
    path:'/weather',
    element: <WeatherApp />,
  },

  {
    path:'/news',
    element: <NewsApp />,
  },
  
  {
    path:'/beverage',
    element: <BeverageApp />,
  },

  {
    path:'/tesla',
    element: <TeslaClone />,
  },

  {
    path:'/randomdatafromapi',
    element: <RandomDataFromAPI />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

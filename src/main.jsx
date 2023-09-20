import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './views/LandingPage.jsx'
import HomePage from './views/HomePage'
import WaitListPage from './views/WaitListPage'

import { init } from '@sapi/js-sdk';

init({ sapiId: 'api-replicate-com-svlmwu' }); // TODO: use your own Sapi ID

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: "error",
  },
  {
    path: "/waitlist",
    element: <WaitListPage />,
    errorElement: "error",
  },
  {
    path: "/ai",
    element: <LandingPage />,
    errorElement: "error",
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)

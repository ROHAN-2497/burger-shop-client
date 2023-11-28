import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/ROutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="mx-auto max-w-7xl bg-black">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)

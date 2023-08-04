import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import { axios } from 'frontend-essentials'
axios.defaults.withCredentials = true

axios.defaults.withCredentials = true
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HalamanUtama from './Halaman/Utama/HalamanUtama'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HalamanUtama />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HalamanAboutUs from './Halaman/About Us/HalamanAboutUs'
import HalamanArtikel from './Halaman/Artikel/HalamanArtikel'
import HalamanEvent from './Halaman/Event/HalamanEvent'
import HalamanGalleryFoto from './Halaman/Gallery Foto/HalamanGalleryFoto'
import HalamanKlienKamu from './Halaman/Klien Kami/HalamanKlienKami'
import HalamanKontakKami from './Halaman/Kontak Kami/HalamanKontakKami'
import HalamanProfile from './Halaman/Profile/HalamanProfile'
import HalamanSignIn from './Halaman/Sign In/HalamanSignIn'
import HalamanSignUp from './Halaman/Sign Up/HalamanSignUp'
import HalamanUtama from './Halaman/Utama/HalamanUtama'
import HalamanVisiMisi from './Halaman/Visi dan Misi/HalamanVisiMisi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HalamanUtama />} />
        <Route path='/about-us' element={<HalamanAboutUs />} />
        <Route path='/artikel' element={<HalamanArtikel />} />
        <Route path='/event' element={<HalamanEvent />} />
        <Route path='/gallery-foto' element={<HalamanGalleryFoto />} />
        <Route path='/klien-kami' element={<HalamanKlienKamu />} />
        <Route path='/kontak-kami' element={<HalamanKontakKami />} />
        <Route path='/visi-misi' element={<HalamanVisiMisi />} />
        <Route path='/profile' element={<HalamanProfile />} />
        <Route path='/sign-in' element={<HalamanSignIn />} />
        <Route path='/sign-up' element={<HalamanSignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

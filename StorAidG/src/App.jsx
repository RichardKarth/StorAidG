import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import ContactUs from './views/ContactUs'

import TopBar from './components/TopBar'
import NavMenu from './components/NavMenu'
import AllRightsReserved from './components/AllRightsReserved'


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
         <header className='main-header'>
          <TopBar />
          <NavMenu />
        </header>
        <main>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about-us' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/contact-us' element={<ContactUs/>}/>
          </Routes>
        </main>
        <footer className='rights-reserved'>
          <AllRightsReserved />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
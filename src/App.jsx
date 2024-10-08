import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'  
import Visualise from './Components/Visualise'
import Learn from './Components/Learn'
import Footer from './Components/Footer'

function App() {
  return (
    <div className=' bg-gray-700 h-full w-full text-white font-mont'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Visualise />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

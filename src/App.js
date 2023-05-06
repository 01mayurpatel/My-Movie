import React from 'react'
import './App.css'
import Navbar from './components/Navbar/NavTop';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards'

function App() {
  return (
    <>
     <div className='main'>
      <Navbar/>
      <Slider/>
      <Cards/>
    </div>
    </>
  )
}

export default App

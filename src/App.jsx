import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden bg-gray-600'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App

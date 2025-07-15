import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contect from './components/Contect'
import Footer from './components/Footer'

function App() {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contect/>
      <Footer/>
    </main>
  )
}

export default App

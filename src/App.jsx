import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Partners from './components/Partners'
import AboutUs from './components/AboutUs'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Partners />
        <AboutUs />
      </main>
    </div>
  )
}

export default App

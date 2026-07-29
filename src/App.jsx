import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Partners from './components/Partners'
import AboutUs from './components/AboutUs'
import SignInModal from './components/SignInModal'
import './App.css'

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [initialSignUp, setInitialSignUp] = useState(false);

  const handleOpenSignIn = (isSignUp = false) => {
    setInitialSignUp(isSignUp);
    setIsSignInOpen(true);
  };

  return (
    <div className="app-container">
      <Navbar onOpenSignIn={handleOpenSignIn} />
      <main>
        <Hero onOpenSignIn={handleOpenSignIn} />
        <Services />
        <Features />
        <Partners />
        <AboutUs />
      </main>

      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
        initialIsSignUp={initialSignUp}
        key={initialSignUp ? 'signup' : 'signin'}
      />
    </div>
  )
}

export default App

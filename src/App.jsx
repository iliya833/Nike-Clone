import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import NikeGrid from './components/NikeGrid'
import TennisSlider from './components/TennisSlider' 
import Footer from './components/Footer'
function App() {
 
  return (
    <>
  <Header />
  <Hero />
  <NikeGrid />
  <TennisSlider />
  <Footer />
  </>
  )
}

export default App

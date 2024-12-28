import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { DirectionProvider } from './components/DirectionContext'
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom'; // Import Router components
import LanguageSwitcher from './components/LanguageSwticher/LanguageSwitcher'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <DirectionProvider >
      <LanguageSwitcher />
      <Navbar />
<Hero />
<Footer />
</DirectionProvider>
</BrowserRouter>
    </div>
  )
}

export default App

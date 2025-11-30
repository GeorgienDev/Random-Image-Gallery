import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav/Nav'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Nav/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App

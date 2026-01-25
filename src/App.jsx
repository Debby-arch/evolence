import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Services from './Components/Navbar/Services/Services'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container"></div>
        <Services/>
    </div>
  )
}

export default App

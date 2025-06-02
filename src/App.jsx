import React from 'react'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Manager />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
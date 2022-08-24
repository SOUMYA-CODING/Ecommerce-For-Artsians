import React from 'react'
import { Header, Home, Contact, Category, Footer } from './components';
import { Route, Routes } from 'react-router-dom'

import "./index.css"

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/category' element={<Category />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
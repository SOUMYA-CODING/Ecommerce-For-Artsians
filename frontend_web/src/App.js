import React from 'react'
import { Header, Home, Contact, Category, Product, Footer, Order, Cart, Login, Registration } from './components';
import { Route, Routes } from 'react-router-dom'

import "./index.css"

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product/:id' element={<Product />} />

        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />

        {/* Login Registration Link */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
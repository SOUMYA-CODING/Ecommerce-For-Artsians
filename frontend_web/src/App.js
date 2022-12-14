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
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/category' element={<Category />} />
        <Route exact path='/product/:id' element={<Product />} />

        <Route exact path='/order' element={<Order />} />
        <Route exact path='/cart' element={<Cart />} />

        {/* Login Registration Link */}
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/registration' element={<Registration />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
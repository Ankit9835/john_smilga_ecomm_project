import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Checkout, SingleProduct } from './pages'
import {
  Home,
  Products,
  SingleProducts,
  About,
  Cart,
  Error,
  Checkouts,
  PrivateRoute,
  SharedLayout,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProducts />} />
          <Route path='checkout' element={<Checkouts />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

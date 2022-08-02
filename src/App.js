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
import AuthWrapper from './pages/AuthWrapper'

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<SingleProducts />} />
            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <Checkouts />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </AuthWrapper>
    </BrowserRouter>
  )
}

export default App

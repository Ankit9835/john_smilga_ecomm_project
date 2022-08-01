import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev - vwjga2rt.us.auth0.com
// o30jQX4miWOFqYznqYSa0350WyeHb5mB
ReactDOM.render(
  <Auth0Provider
    domain='dev-vwjga2rt.us.auth0.com'
    clientId='o30jQX4miWOFqYznqYSa0350WyeHb5mB'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
)

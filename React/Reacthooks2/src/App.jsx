import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import products from './models/products'
import CartProvider from './components/CartContext/CartContext'
import Product from './components/CartContext/Product/Product'
import Cart from './components/Cart/Cart'

function App() {


  return (
    <div className="App">
    <h1>Welcome to my eShop</h1>
<CartProvider>
<div className='list'>
    <ul style={{
              
              listStyleType: `none`,
              display: `inline-block`,
             
            }}>
      {products.map((product)=>(
        <li key={product.id}>
        <Product product={product}/>
        </li>
      ))}
    </ul>
    </div>
    <Cart/>
    </CartProvider>

    </div>
  )
}

export default App

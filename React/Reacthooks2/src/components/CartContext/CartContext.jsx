import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'

export const CartContext = createContext()

const CartProvider=({children}) =>{

 


    const [cartItems, setCartItems]= useState([])
    const handleDeleteProduct = useCallback((index)=>{
      setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index+1)])
    
  
    },[setCartItems, cartItems])
  
  

    
    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };
    
    const calculateTotalPrice = useMemo(()=>{
        return cartItems.reduce((total,item)=> { return total + item.price},0)
    },[cartItems])

  return (
    <CartContext.Provider value={{ cartItems, handleDeleteProduct, addToCart, calculateTotalPrice }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider
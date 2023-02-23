import React from "react";
import { useContext, useCallback } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, handleDeleteProduct, calculateTotalPrice } = useContext(CartContext);
 

  return (
    <div className="cart">
      <h2>Your cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li
            style={{
              backgroundColor: `skyblue`,
              listStyleType: `none`,

              padding: `10px`,
            }}
            key={item.id}
          >
            {item.name} || {item.price} € 
             <button onClick={()=>handleDeleteProduct(index)}>X</button>
          </li>
        ))}
      </ul>

      <p>Total {calculateTotalPrice} €</p>
    </div>
  );
};

export default Cart;

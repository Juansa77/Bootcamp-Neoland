import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
    </div>
  );
}

export default Product;


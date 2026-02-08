import React from "react";

function ProductItem({ productId, productName, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <p>ID: {productId}</p>
      <p className="price">${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductItem;

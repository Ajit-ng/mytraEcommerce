import React from 'react';

const ProductCard = ({ product }) => {
  const images = JSON.parse(product.image[0]);

  return (
    <div className="product-card">
      <h2>{product.product_name}</h2>
      <div className="product-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={product.product_name} />
        ))}
      </div>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Retail Price:</strong> ₹{product.retail_price}</p>
      <p><strong>Discounted Price:</strong> ₹{product.discounted_price}</p>
      <div className="description-container">
        <p><strong>Description:</strong> {product.description}</p>
      </div>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;

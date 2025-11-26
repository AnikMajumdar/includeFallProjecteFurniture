"use client";
import React from 'react';
import './productInfo.scss';
import addToCart from '@/app/(utils)/addToCart';

interface ProductProps {
    sku: string,
    description: string,
    price: number,
    name: string,
    image: string
}
const ProductInfo = ({image, name, price, sku, description} : ProductProps) => {
  const handleAddToCart = async () => {
    try {
      const result = await addToCart(image, name, price, description, sku);
      if (result) {
        alert(`${name} added to cart!`);
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="product-info">
      <div className="product-info__image">
        <img 
          src={image}
          alt="Modern Sofa"
        />
      </div>
      
      <div className="product-info__details">
        <h1 className="product-info__name">{name}</h1>
       
        <p className="product-info__description">
          {description}
        </p>
        <div className="product-info__price">${price}</div>
        <button 
          className="product-info__add-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
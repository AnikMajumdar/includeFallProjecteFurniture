import React from 'react';
import './productInfo.scss';

interface ProductProps {
    sku: string,
    description: string,
    price: number,
    name: string,
    image: string
}
const ProductInfo = ({image, name, price, sku, description} : ProductProps) => {
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
      </div>
    </div>
  );
};

export default ProductInfo;
"use client"
import React, {useEffect, useState} from 'react';
import './featured.scss';
import ProductCard from '../productCard/productCard';

const Featured = () => {

  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {

  const getFeaturedProducts = async () => {   
       const url = "https://furniture-api.fly.dev/v1/products?featured"
       const response = await fetch(url)
       const result = await response.json();
       setFeaturedProducts(result.data)
  }
  getFeaturedProducts()
  }, [])

  console.log(featuredProducts)

  return (
    <div className="products-grid">
      {
        featuredProducts.map((product: any) => 
          <ProductCard
          key={product.uid}
          image={product.image_path}
          name={product.name}
          price={product.price}
          sku={product.sku}
          />
        )
      }  
    </div>
  );
};

export default Featured;
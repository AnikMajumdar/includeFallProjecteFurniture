"use client"
import React, {useEffect, useState} from 'react';
import './featured.scss';
import Product from '../product/product';


const Products = () => {

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

  return (
    <div className="products-grid">
      {
        featuredProducts.map((product: any) => 
          <Product
          image={product.image_path}
          name={product.name}
          price={product.price}
          />

        )
      }  
    </div>
  );
};

export default Products;
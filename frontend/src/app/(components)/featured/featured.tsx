"use client"
import React, {useEffect, useState} from 'react';
import './featured.scss';
import ProductCard from '../productCard/productCard';

const Featured = () => {

  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
 
 const getFeaturedProducts = async () => {   

       try {
         const url = "https://furniture-api.fly.dev/v1/products?featured"
       const response = await fetch(url)
       const result = await response.json();
       setFeaturedProducts(result.data)
       } catch (err) {
          console.log(err)
       } finally {
        setLoading(false)
       }
  }
  getFeaturedProducts()
  }, [])

  if (loading) {
    return (
       <div className="products-section">
      <h1 className="featured-sign">Featured</h1>
        <div className="loading-sign"></div>
    </div>
    )
  }

  return (
    <div className="products-section">
      <h1 className="featured-sign">Featured</h1>
      
      <div className="products-grid">
        {
          featuredProducts.map((product: any) => 
            <ProductCard
            key={product.uid}
            image={product.image_path}
            name={product.name}
            price={product.price}
            sku={product.sku}
            description={product.description}
            inCart={false}
            id={product.uid}
            />
          )
        }  
      </div>
    </div>
  );
};

export default Featured;
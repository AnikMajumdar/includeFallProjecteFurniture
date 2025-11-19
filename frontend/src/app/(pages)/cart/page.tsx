"use client";
import getCart from "@/app/(utils)/getCart";
import { useEffect, useState } from "react";
import ProductCard from "@/app/(components)/productCard/productCard";
import Header from "@/app/(components)/header/header";
import "@/app/(components)/featured/featured.scss";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>();
  //fetch items in cart and display them
  useEffect(() => {
    const getCartItems = async () => {
      const response = await getCart();
      setCart(response);
    };
    getCartItems();
  }, []);


  if (cart) {
    return (
      <div>
        <Header />
        {
          <div className="products-grid">
            {cart.map((product: any) => (
              <ProductCard
                key={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                sku={product.sku}
                description={product.description}
                inCart={true}
                id={product._id}
              />
            ))}
          </div>
        }
      </div>
    );
  } 
};

export default Cart;

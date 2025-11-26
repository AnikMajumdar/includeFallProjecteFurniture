"use client";
import getCart from "@/app/(utils)/getCart";
import { useEffect, useState } from "react";
import ProductCard from "@/app/(components)/productCard/productCard";
import Header from "@/app/(components)/header/header";
import ProtectedRoute from "@/app/(utils)/ProtectedRoute";
import "@/app/(components)/featured/featured.scss";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const CartContent = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartUpdate, setCartUpdate] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await getCart();
        setCart(response || []);
      } catch (error) {
        console.error("Failed to load cart:", error);
        setCart([]);
      } finally {
        setLoading(false);
      }
    };
    getCartItems();
  }, [cartUpdate]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="loading-sign"></div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <h1 className="featured-sign">Cart</h1>
        <div className="cart-empty" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '1.2rem' }}>Your cart is empty</p>
          <p style={{ color: 'var(--text-secondary)' }}>Add items from the home page or product pages to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1 className="featured-sign">Cart</h1>
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
            setCartUpdate={setCartUpdate}
          />
        ))}
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <ProtectedRoute>
      <CartContent />
    </ProtectedRoute>
  );
};

export default Cart;

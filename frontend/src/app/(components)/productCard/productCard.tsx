"use client";
import { useState } from "react";
import "./productCard.scss";
import Link from "next/link";
import addToCart from "@/app/(utils)/addToCart";
import removeFromCart from "@/app/(utils)/removeFromCart";
import Toast from "@/app/(components)/toast/toast";

interface ProductProps {
  image: string;
  name: string;
  price: number;
  sku: string;
  description: string;
  inCart: boolean;
  id: string;
  setCartUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const ProductCard = ({
  image,
  name,
  price,
  sku,
  description,
  inCart,
  id,
  setCartUpdate
}: ProductProps) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "info">("success");

  const handleRemoveFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    removeFromCart(id);
    setToastMessage("Removed from cart!");
    setToastType("info");
    setShowToast(true);
    setCartUpdate(prev => prev + 1)

  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(image, name, price, description, sku);
    setToastMessage(`${name} added to cart!`);
    setToastType("success");
    setShowToast(true);
  };

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        href={{
          pathname: `/item/${sku}`,
          query: { sku: sku },
        }}
      >
        <div className="product-card">
          <img src={image} alt="Product" className="product-card__image" />
          <div className="product-card__content">
            <h3 className="product-card__title">{name}</h3>
            <div className="product-card__price">${price}</div>

            {inCart ? (
              <button
                className="product-card__button"
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="product-card__button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Link>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
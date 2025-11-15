// ProductCard.tsx
import './productCard.scss';
import { redirect } from 'next/navigation'
import Link from "next/link";

interface ProductProps {
    image: string
    name: string
    price: number
    sku: string
}

const ProductCard = ({image, name, price, sku} : ProductProps) => {
  return (
    <div>
        <Link href={{
                pathname: `/item/${sku}`,
          
            }}>
                  <div
    className="product-card">
      <img 
        src={image} 
        alt="Product" 
        className="product-card__image" 
      />
      <div className="product-card__content">
        <h3 className="product-card__title">{name}</h3>
        <div className="product-card__price">${price}</div>
        <button className="product-card__button">Add to Cart </button>
      </div>
    </div>
            </Link>
    </div>
  );
};

export default ProductCard;


/*




 <div
    onClick={() => redirect("/item")}
    className="product-card">
      <img 
        src={image} 
        alt="Product" 
        className="product-card__image" 
      />
      <div className="product-card__content">
        <h3 className="product-card__title">{name}</h3>
        <div className="product-card__price">${price}</div>
        <button className="product-card__button">Add to Cart </button>
      </div>
    </div>



*/
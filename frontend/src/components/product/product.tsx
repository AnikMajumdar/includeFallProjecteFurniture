// ProductCard.tsx
import './product.scss';

interface ProductProps {
    image: string
    name: string
    price: number
 
}

const Product = ({image, name, price} : ProductProps) => {
  return (
    <div className="product-card">
      <img 
        src={image} 
        alt="Product" 
        className="product-card__image" 
      />
      <div className="product-card__content">
        <h3 className="product-card__title">{name}</h3>
        <div className="product-card__price">${price}</div>
        <button className="product-card__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
import './header.scss'

const Header = () => {
    
    return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">Furniture Ecommerce</a>
        <button className="header__cart-btn">
          Cart
        </button>
      </div>
    </header>
  ); 

};
    


export default Header
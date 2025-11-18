import './header.scss'
import SearchBar from '../searchBar/searchBar'

const Header = () => {
    
    return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">Furniture Ecommerce</a>
        <SearchBar />
        <button className="header__cart-btn">
          Cart
        </button>
      </div>
    </header>
  ); 

};
    


export default Header
"use client";
import './header.scss'
import SearchBar from '../searchBar/searchBar'
import { redirect } from 'next/navigation'

const Header = () => {
    
    return (
    <header className="header">
      <div className="header__container">
        <a href="/home" className="header__logo">Furniture Ecommerce</a>
        <SearchBar />
        <button className="header__cart-btn"
        onClick={() => redirect('/cart')}
        >
          Cart
        </button>
      </div>
    </header>
  ); 

};
    


export default Header
"use client";
import './header.scss'
import SearchBar from '../searchBar/searchBar'
import { redirect } from 'next/navigation'
import { useTheme } from '@/app/(utils)/themeContext'

const Header = () => {
    const { isDark, toggleTheme } = useTheme()
    
    return (
    <header className="header">
      <div className="header__container">
        <a href="/home" className="header__logo">Furniture Ecommerce</a>
        <SearchBar />
        <div className="header__actions">
          <button 
            className="header__theme-btn"
            onClick={toggleTheme}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button className="header__cart-btn"
          onClick={() => redirect('/cart')}
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  ); 

};
    


export default Header
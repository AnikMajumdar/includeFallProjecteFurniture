"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './searchBar.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search furniture by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-bar__button">Search</button>
    </form>
  );
};

export default SearchBar;

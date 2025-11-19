"use client"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/app/(components)/header/header"
import ProductCard from "@/app/(components)/productCard/productCard"
import './search.css'

const Search = () => {
  const params = useSearchParams()
  const query = params.get("query");

  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const performSearch = async () => {
      if (!query) {
        setSearchResults([])
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const url = `https://furniture-api.fly.dev/v1/products?name=${encodeURIComponent(query)}`
        const response = await fetch(url)
        const result = await response.json();
        setSearchResults(result.data || [])
        setError("")
      } catch (err) {
        setError("Failed to fetch search results")
        setSearchResults([])
      } finally {
        setLoading(false)
      }
    }

    performSearch()
  }, [query])

  return (
    <div>
      <Header />
      <div className="search-wrapper">
        <div className="search-container">
          <h2 className="search-subtitle">search results for {query}:</h2>

          {loading && <p className="search-status">Loading...</p>}

          {error && <p className="search-error">{error}</p>}

          {!loading && searchResults.length === 0 && query && (
            <p className="search-status">No furniture items found matching "{query}"</p>
          )}

          {!loading && searchResults.length > 0 && (
            <div>
              <p className="search-count">Found {searchResults.length} result(s)</p>
              <div className="products-grid">
                {searchResults.map((product: any) => (
                  <ProductCard
                    key={product.uid}
                    image={product.image_path}
                    name={product.name}
                    price={product.price}
                    sku={product.sku}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Search

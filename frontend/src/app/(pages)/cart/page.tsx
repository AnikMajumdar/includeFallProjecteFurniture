"use client"
import getCart from "@/app/(utils)/getCart"
import { useEffect, useState } from "react"
import ProductCard from "@/components/productCard/productCard"
import Header from "@/components/header/header"
import '@/components/featured/featured.scss'



interface Product {
    _id: string;
    name: string;
    description: string,
    price: number
    image: string
}


const Cart = () => {
    const [cart, setCart] = useState<Product[]>()
    //fetch items in cart and display them
    useEffect(() => {

        const getCartItems = async () => {
        
            const response = await getCart()
            setCart(response)
        }

        getCartItems()
    })

    if (cart) {
        return (<div>
        <Header/>
        
              {
        <div className="products-grid">
      {
       cart.map((product: any) => 
          <ProductCard
          key={product.uid}
          image={product.image_path}
          name={product.name}
          price={product.price}
          sku={product.sku}
          />
        )
      }  
    </div>
        
        }
    </div>)
    }
    else {
        return <div>
            failed to fetch cart items
        </div>
    }
    
}

export default Cart
"use client"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/app/(components)/header/header"
import ProductInfo from "@/app/(components)/productInfo/prouctInfo"

interface Item {
  name: string,
  sku: string,
  description: string,
  price: number,
  image_path: string,

}


const Item = () => {

  const params = useSearchParams()
  const sku = params.get("sku");
  

  const [iteminfo, setItemInfo] = useState<Item>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getItemInfo = async () => {
      try {
         const url = `https://furniture-api.fly.dev/v1/products/${sku}`
        const response = await fetch(url)
        const result = await response.json();
        setItemInfo(result.data)   
        console.log(iteminfo) 
      } catch (err) {
        console.log('error')
      } finally {
        setLoading(false)
      }
       
    }
    getItemInfo()
  }, [sku])

  if (loading) {
    return (
      <div>
        <Header/>
        <div className="loading-sign"></div>
    </div>
    )
  }
  // Use the sku here
  if (iteminfo != undefined) {

    return <div>
    <Header/>
    <ProductInfo
    name={iteminfo.name}
    sku={iteminfo.sku}
    description={iteminfo.description}
    price={iteminfo.price}
    image={iteminfo.image_path}
    />
     </div>
  }

}

export default Item
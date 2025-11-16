"use client"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header/header"
import ProductInfo from "@/components/productInfo/prouctInfo"



const Item = () => {

  const params = useSearchParams()
  const sku = params.get("sku");

  const [iteminfo, setItemInfo] = useState()

  useEffect(() => {
    const getItemInfo = async () => {
        const url = `https://furniture-api.fly.dev/v1/products/${sku}`
        const response = await fetch(url)
        const result = await response.json();
        setItemInfo(result.data)   
        console.log(iteminfo) 
    }
    getItemInfo()
  }, [sku])
  
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
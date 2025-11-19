"use client";
const addToCart = async (image: string, name: string, price: number, description: string, sku: string) => {
  const ProductObject = {
    image: image,
    name: name,
    price: price,
    description: description,
    sku: sku,
  };

  const url = "http://localhost:3001/cart";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProductObject),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default addToCart;

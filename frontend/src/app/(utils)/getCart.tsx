const getCart = async () => {

  
    const url = "http://localhost:3001/cart";

    try {
        const response = await fetch(url)
        console.log(response)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()


        return result.data

    } catch (error) {
        console.log(error)
    }
}

export default getCart
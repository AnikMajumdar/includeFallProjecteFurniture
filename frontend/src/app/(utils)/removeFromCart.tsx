const removeFromCart = async (id: string) => {

    const url = `http://localhost:3001/cart/${id}`;

    try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json' // Optional, but good practice
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete item');
            }

            const data = await response.json();
            console.log(data.message); // Log success message
            // Update UI or perform other actions after successful deletion
        } catch (error: any)
         {
            console.error('Error deleting item:', error.message);
            // Handle error, e.g., display an error message to the user
        }

}

export default removeFromCart
import { useState, createContext, useContext, useEffect } from "react";

const productContext = createContext();

export function ProductProvider({ children }) {
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const localProductStorage = localStorage.getItem("productData")
        if(localProductStorage) {
            setProductData(JSON.parse(localProductStorage))
            setIsLoading(false)
            return;
        }
        const fetchData = async () => {
            try {
                const fetchData = await fetch('https://fakestoreapi.com/products');
                const getProductData = await fetchData.json()
                const productDataWithStock = getProductData.map((product) => {
                    return {
                        ...product,
                        stock: 10
                    }
                })
                setProductData(productDataWithStock)
                localStorage.setItem("productData", JSON.stringify(productDataWithStock))

            } catch (err) {
                console.log("Error" + err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])


    function updateStock(cartItems) {
        setProductData(prevItems => {
            const updatedProducts = prevItems.map(product => {
                const itemInCart = cartItems.find(item => item.id === product.id)
                if (itemInCart) {
                    return {
                        ...product,
                        stock: product.stock - itemInCart.qty
                    }
                }
                return product
            })
    
            localStorage.setItem('productData', JSON.stringify(updatedProducts))
            return updatedProducts
        })
    }
    


    const value = {
        productData,
        setProductData,
        isLoading,
        updateStock
    }
    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    )
}

export const useProductContext = () => useContext(productContext)
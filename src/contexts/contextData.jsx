import { useState, createContext, useContext, useEffect } from "react";

const productContext = createContext();

export function ProductProvider({ children }) {
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchData = await fetch('https://fakestoreapi.com/products');
                const getProductData = await fetchData.json()
                const productDataWithQty = getProductData.map((product) => {
                    return {
                        ...product,
                        stock: 10
                    }
                })
                setProductData(productDataWithQty)

            } catch (err) {
                console.log("Error" + err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const value = {
        productData,
        isLoading
    }
    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    )
}

export const useProductContext = () => useContext(productContext)
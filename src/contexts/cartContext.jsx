import { useState, createContext, useContext } from "react";
import { useProductContext } from "./contextData";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const { productData } = useProductContext()

    function addToCart(itemsId) {
        const inCart = productData.find(currentVal => itemsId === currentVal.id)
        if(!inCart) return;
        const toCart = {...inCart}


        setCartItems(prevItems => [...prevItems, toCart])
    }

    const valueCart = {
        cartItems,
        addToCart
    }
    return (
        <>
            <CartContext.Provider value={valueCart}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCartContext = () => useContext(CartContext);
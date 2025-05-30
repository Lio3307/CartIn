import { useState, createContext, useContext, useEffect } from "react";
import { useProductContext } from "./contextData";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const { productData } = useProductContext()

    useEffect(() => {
        const localDataStorage = localStorage.getItem('cartItems')
        if(localDataStorage) setCartItems(JSON.parse(localDataStorage))
    }, [])

    function addToCart(itemsId) {
        const inCart = productData.find(currentVal => itemsId === currentVal.id)
        if(!inCart) return;
        const toCart = {...inCart}


        setCartItems(prevItems => {
            const setCartValue = [...prevItems, toCart]
            localStorage.setItem('cartItems', JSON.stringify(setCartValue))
            return setCartValue
        })
    }

    function removeFromCart(cartItemId) {
        const confirmDeleted = confirm("Apakah anda yakin ingin membatalkan?")
        if(!confirmDeleted) return;
        setCartItems((currentVal) => {
            const removedCart = currentVal.filter(currentItem => currentItem.id !== cartItemId)
            localStorage.setItem('cartItems', JSON.stringify(removedCart))
            return removedCart;
        })
    }

    const valueCart = {
        cartItems,
        addToCart,
        removeFromCart
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
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
        const inCart = productData.find(product => product.id === itemsId);
        if (!inCart) return;
    
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemsId);
    
            let updatedCart;
    
            if (existingItem) {
                updatedCart = prevItems.map(item =>
                    item.id === itemsId
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                updatedCart = [
                    ...prevItems,
                    {
                        id: inCart.id,
                        title: inCart.title,
                        price: inCart.price,
                        description: inCart.description,
                        image: inCart.image,
                        qty: 1
                    }
                ];
            }
    
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
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
import { useCartContext } from "../contexts/cartContext"


export const MatchCartItems = () => {
    const {cartItems} = useCartContext()

    const totalCost = cartItems.reduce((total, items) => {
        return Number(total + (items.price * items.quantity))
    }, 0)

    return (
        <>
        <p>${totalCost}</p>
        </>
    )
}
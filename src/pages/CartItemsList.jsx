import { useCartContext } from "../contexts/cartContext"

export function CartItemsList() {
    const { cartItems, removeFromCart } = useCartContext()


    return (
        <>
            {cartItems.length > 0 ? (
                <div className="container my-4">
                    <div className="row g-3">
                        {cartItems.map((productCart) => (
                            <div className="col-12" key={productCart.id}>
                                <div className="card shadow-sm border-0 mb-2">
                                    <div className="card-body p-3">
                                        <div className="row g-3 align-items-center">
                                            {/* Product Image */}
                                            <div className="col-md-2 col-3">
                                                <div className="ratio ratio-1x1">
                                                    <img
                                                        src={productCart.image}
                                                        className="rounded object-fit-contain bg-light"
                                                        alt={productCart.title}
                                                    />
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className="col-md-7 col-9">
                                                <h6 className="card-title mb-2 fw-semibold text-dark">
                                                    {productCart.title}
                                                </h6>
                                                <p className="card-text text-muted small mb-2">
                                                    {productCart.description}
                                                </p>
                                            </div>

                                            {/* Price */}
                                            <div className="col-md-3 col-12">
                                                <div className="text-md-end">
                                                    <h5 className="text-danger fw-bold mb-0">
                                                        ${productCart.price}
                                                    </h5>
                                                    <button 
                                                    onClick={() => {removeFromCart(productCart.id)}}
                                                    className="btn btn-danger my-3">Cancle</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
                :
                (<h3 className="text-center m-3">Tidak Ada Barang Di Keranjang</h3>)
            }
        </>
    )
}
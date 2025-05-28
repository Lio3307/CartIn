import { useCartContext } from "../contexts/cartContext"
import { Link } from "react-router-dom"

export function CartItemsList() {
    const { cartItems } = useCartContext()
    return (
        <>
            {cartItems.length > 0 ? (<div className="container my-4">
                <div className="row g-3">
                    {cartItems.map((productCart) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={productCart.id}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="ratio ratio-4x3">
                                    <img
                                        src={productCart.image}
                                        className="card-img-top object-fit-contain bg-light"
                                        alt={productCart.title}
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title mb-2 text-truncate" style={{ maxWidth: "100%" }}>
                                        {productCart.title}
                                    </h5>

                                    <p className="card-text text-muted small text-truncate mb-3 flex-grow-1" style={{ maxWidth: "100%" }}>
                                        {productCart.description}
                                    </p>

                                    <Link className="btn btn-primary m-1 btn-sm" to={`/detail-product/${Number(productCart.id)}`}>
                                        Lihat Detail
                                    </Link>
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
import { useProductContext } from "../contexts/contextData";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";

export function DetailProduct() {
    const { productData } = useProductContext();
    const { addToCart, cartItems } = useCartContext()


    const { id } = useParams();

    const findMatchItemById = productData.find((valItem) => valItem.id === parseInt(id))
    if (!findMatchItemById) return <h3 className="text-center">Data Product Tidak Ada</h3>

    const handleCart = (e) => {
        e.preventDefault()
        const alreadyInCart = cartItems.some(itemVal => itemVal.id === findMatchItemById.id)
        if (alreadyInCart) return alert("Data sudah Ada!!")
        else {
            alert("Data Di Tambahkan Ke Keranjang")
            addToCart(findMatchItemById.id)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-sm border-0">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <div className="position-relative h-100">
                                        <img
                                            src={findMatchItemById.image}
                                            className="img-fluid w-100 h-100 object-fit-cover rounded-start"
                                            alt={findMatchItemById.title}
                                            style={{ minHeight: '300px' }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body d-flex flex-column h-100 p-4">
                                        {/* Header Section */}
                                        <div className="mb-3">
                                            <h2 className="card-title mb-2 fw-bold text-dark">
                                                {findMatchItemById.title}
                                            </h2>
                                            <h3 className="text-danger fw-bold mb-0">
                                                ${findMatchItemById.price}
                                            </h3>
                                        </div>

                                        {/* Description Section */}
                                        <div className="flex-grow-1 mb-4">
                                            <h6 className="text-muted mb-2">Deskripsi Produk</h6>
                                            <p className="card-text text-secondary lh-lg">
                                                {findMatchItemById.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
                                            <button
                                                onClick={handleCart}
                                                className="btn btn-warning fw-semibold px-4 py-2 flex-grow-1"
                                            >
                                                <i className="bi bi-cart-plus me-2"></i>
                                                Tambah ke Keranjang
                                            </button>
                                            <Link
                                                to="/"
                                                className="btn btn-outline-secondary px-4 py-2"
                                            >
                                                <i className="bi bi-arrow-left me-2"></i>
                                                Kembali
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
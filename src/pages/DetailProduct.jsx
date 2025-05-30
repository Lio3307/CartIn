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
                        <div className="card shadow-sm border-0 overflow-hidden">
                            <div className="row g-0 align-items-stretch">
                                <div className="col-md-5">
                                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                                        <img
                                            src={findMatchItemById.image}
                                            className="img-fluid rounded-start"
                                            alt={findMatchItemById.title}
                                            style={{
                                                maxHeight: '400px',
                                                width: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-7 d-flex">
                                    <div className="card-body d-flex flex-column justify-content-between p-4 w-100">
                                        <div className="mb-3">
                                            <h2 className="card-title mb-2 fw-bold text-dark">
                                                {findMatchItemById.title}
                                            </h2>
                                            <h3 className="text-danger fw-bold mb-0">
                                                ${findMatchItemById.price}
                                            </h3>
                                        </div>

                                        <div className="flex-grow-1 mb-4">
                                            <h6 className="text-muted mb-2">Deskripsi Produk</h6>
                                            <p className="card-text text-secondary lh-lg">
                                                {findMatchItemById.description}
                                            </p>
                                        </div>

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
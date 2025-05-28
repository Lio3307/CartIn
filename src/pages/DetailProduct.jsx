import { useParams } from "react-router-dom"
import { useProductContext } from "../contexts/contextData";
import { Link } from "react-router-dom";
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
        if(alreadyInCart) return alert("Data sudah Ada!!")
            else {
        alert("Data Di Tambahkan Ke Keranjang")
        addToCart(findMatchItemById.id)
    }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={findMatchItemById.image} className="img-fluid rounded-start" alt={findMatchItemById.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{findMatchItemById.title}</h3>
                                <h4 className="text-danger">$ {findMatchItemById.price}</h4>
                                <p className="card-text">{findMatchItemById.description}</p>
                                <Link to="/" className="btn btn-danger mt-3">← Kembali</Link>
                            </div>

                            <button
                            onClick={handleCart}
                             className="btn btn-warning m-1 btn-sm" > 
                                    Tambah ke keranjang
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useParams } from "react-router-dom"
import { useProductContext } from "../contexts/contextData";
import { Link } from "react-router-dom";

export function DetailProduct() {
    const { productData } = useProductContext();
    const { id } = useParams();
    console.log(productData)
    
    const findMatchItemId = productData.find((valItem) => valItem.id === parseInt(id))
    console.log(findMatchItemId)
    if (!findMatchItemId) return <h3 className="text-center">Data Product Tidak Ada</h3>

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={findMatchItemId.image} className="img-fluid rounded-start" alt={findMatchItemId.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{findMatchItemId.title}</h3>
                                <h4 className="text-danger">$ {findMatchItemId.price.toLocaleString()}</h4>
                                <p className="card-text">{findMatchItemId.description}</p>
                                <Link to="/" className="btn btn-danger mt-3">← Kembali</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
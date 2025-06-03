import { Link } from "react-router-dom";

export function CardProduct({dataProduct}) {

    if (!dataProduct) return <h3 className="text-center m-5">Tidak Ada Product</h3>;
    return (
        <div className="container my-4">
            <div className="row g-3">
                {dataProduct.map((product) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card h-100 shadow-sm border-0">
                            <div className="ratio ratio-4x3">
                                <img
                                    src={product.image}
                                    className="card-img-top object-fit-contain bg-light"
                                    alt={product.title}
                                />
                            </div>
                            
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-2 text-truncate" style={{ maxWidth: "100%" }}>
                                    {product.title}
                                </h5>
                                
                                <p className="card-text text-muted small text-truncate mb-3 flex-grow-1" style={{ maxWidth: "100%" }}>
                                    Stock : {product.stock}
                                </p>
                                
                                <p className="card-text text-muted small text-truncate mb-3 flex-grow-1" style={{ maxWidth: "100%" }}>
                                    {product.description}
                                </p>

                                <Link className="btn btn-primary m-1 btn-sm" to={`/detail-product/${Number(product.id)}`}> 
                                    Lihat Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    );
}

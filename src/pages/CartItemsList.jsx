import { useCartContext } from "../contexts/cartContext"
import { useProductContext } from "../contexts/contextData"

export function CartItemsList() {
    const { cartItems, removeFromCart, updateCartQty } = useCartContext()
    const { productData } = useProductContext()

    const totalCost = cartItems.reduce((total, items) => {
        return total + (items.qty * items.price)
    }, 0)



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
                                            <div className="col-md-2 col-3">
                                                <div className="ratio ratio-1x1">
                                                    <img
                                                        src={productCart.image}
                                                        className="rounded object-fit-contain bg-light"
                                                        alt={productCart.title}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-7 col-9">
                                                <h6 className="card-title mb-2 fw-semibold text-dark">
                                                    {productCart.title}
                                                </h6>
                                                <p className="card-text text-muted small mb-2">
                                                    {productCart.description}
                                                </p>

                                                <p className="card-text text-muted small mb-2"> Jumlah barang : {productCart.qty}</p>

                                                <input
                                                    type="number"
                                                    min={1}
                                                    max={
                                                        productData.find((product) => product.id === productCart.id)?.stock ?? 1
                                                    }
                                                    value={productCart.qty}
                                                    onChange={(e) => {
                                                        const inputValue = Number(e.target.value);

                                                        if (isNaN(inputValue)) {
                                                            alert("Masukkan angka yang valid");
                                                            return;
                                                        }

                                                        if (inputValue < 1) {
                                                            alert("Jumlah tidak boleh kurang dari 1");
                                                            return;
                                                        }

                                                        const product = productData.find((p) => p.id === productCart.id);

                                                        if (!product) {
                                                            alert("Produk tidak ditemukan");
                                                            return;
                                                        }

                                                        if (inputValue > product.stock) {
                                                            alert("Jumlah melebihi stok");
                                                            return;
                                                        }

                                                        updateCartQty(productCart.id, inputValue);
                                                    }}
                                                    className="form-control w-50"
                                                />


                                            </div>

                                            <div className="col-md-3 col-12">
                                                <div className="text-md-end">
                                                    <h5 className="text-danger fw-bold mb-0">
                                                        ${productCart.price}
                                                    </h5>
                                                    <button
                                                        onClick={() => { removeFromCart(productCart.id) }}
                                                        className="btn btn-danger my-3">Cancle</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p>${totalCost}</p>
                    </div>
                </div>)
                :
                (<h3 className="text-center m-3">Tidak Ada Barang Di Keranjang</h3>)
            }
        </>
    )
}
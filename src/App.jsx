import { Routes, Route } from "react-router-dom";
import { useProductContext } from "./contexts/contextData"
import { CardProduct } from "./components/CardProduct"
import { NavBar } from "./components/NavBar";
import { DetailProduct } from "./pages/DetailProduct";
import { CartItemsList } from "./pages/CartItemsList";
import { useSearchBarContext } from "./contexts/searchContext";

function App() {
  const { isLoading, productData } = useProductContext();
  const { filteredItems } = useSearchBarContext()
  return (
    <>
      {isLoading ? (
        <h3 className="text-center m-5">Loading...</h3>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/"
              element={
                <>
                  {filteredItems ? (
                    filteredItems.length > 0 ? (
                      <>
                      <div className="container">
                        <h4 className="my-3  fw-semibold">
                          {filteredItems.length} {filteredItems.length > 1 ? 'Products' : 'Product'}
                        </h4>
                        </div>
                        <CardProduct dataProduct={filteredItems} />
                      </>
                    ) : (
                      <h4 className="text-danger fw-normal">Tidak ada data yang sesuai</h4>
                    )
                  ) : (
                    <CardProduct dataProduct={productData} />
                  )}



                </>
              } />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
            <Route path="/cartItems" element={<CartItemsList />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App

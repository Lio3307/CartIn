import { Routes, Route } from "react-router-dom";
import { useProductContext } from "./contexts/contextData"
import { CardProduct } from "./components/CardProduct"
import { NavBar } from "./components/NavBar";
import { DetailProduct } from "./pages/DetailProduct";
import { CartItemsList } from "./pages/CartItemsList";

function App() {
  const { isLoading, productData } = useProductContext();
  return (
    <>
      {isLoading ? (
        <h3 className="text-center m-5">Loading...</h3>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<CardProduct dataProduct={productData}/>} />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
            <Route path="/cartItems" element={<CartItemsList/>}/>
          </Routes>
        </>
      )}
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import { useProductContext } from "./contexts/contextData"
import { CardProduct } from "./components/CardProduct"
import { NavBar } from "./components/NavBar";
import { DetailProduct } from "./pages/DetailProduct";

function App() {
  const { isLoading } = useProductContext();
  return (
    <>
      {isLoading ? (
        <h3 className="text-center m-5">Loading...</h3>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<CardProduct />} />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App

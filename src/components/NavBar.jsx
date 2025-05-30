import { Link, useLocation } from "react-router-dom";
import { useSearchBarContext } from "../contexts/searchContext";

export function NavBar() {
    const { inputVal, setInputVal, handleInput } = useSearchBarContext()

    const currentLocation = useLocation()
    const hideElements = currentLocation.pathname === '/cartItems' || currentLocation.pathname.startsWith('/detail-product')
    return (
        <>
            <nav className="navbar p navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cartItems">Cart</Link>
                            </li>
                        </ul>
                        {!hideElements &&
                            (<form className="d-flex" onSubmit={handleInput} role="search">
                                <input
                                    value={inputVal}
                                    className="form-control me-2"
                                    type="search" placeholder="Search"
                                    onChange={e => setInputVal(e.target.value)}
                                    aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>)}
                    </div>
                </div>
            </nav>
        </>
    )
}
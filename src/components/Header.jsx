import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">ShopEasy</Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    )
}
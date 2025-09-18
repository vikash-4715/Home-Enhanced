import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/Product/Details";
import Products from "../pages/Product/Product";


export default function Navigate() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="products" element={<Products />} />
                    <Route path="details/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

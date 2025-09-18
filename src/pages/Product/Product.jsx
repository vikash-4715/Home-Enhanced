import { Link } from "react-router-dom";
import ProductsCards from "../../components/ProductCards";
export default function Products() {
     
    return(
        <>
            <section className="breadcrumb">
                <div className="breadcrumb-container">
                    <Link to="/">Home</Link> &gt;
                    <span>Products</span>
                </div>
            </section>

            <div className="product-list-container">
                <h1>Shop All Products</h1>
                <div className="product-grid">
                   <ProductsCards />
                </div>
            </div>
        </>
    )
}
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
export default function ProductsCards() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data =>setProduct(data));
    }, []);
    return(
        <>
            {product && product.length > 0 ? (
                product.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="product-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span>${item.price}</span>
                        </div>
                        <Link to={`/details/${item.id}`} className="add-cart">Add to Cart</Link>
                    </div>
                ))
            ) : (
                <div className="no-data-card">
                    <p>No data available. Please check back later!</p>
                </div>
            )}
        </>
    )
}
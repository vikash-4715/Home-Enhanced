import { useEffect, useState } from "react"
export default function ProductCategory() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const categoriesOrder = [
                "men's clothing",
                "women's clothing",
                "jewelery",
                "electronics"
            ];
            const filteredProducts = categoriesOrder.map(category =>
                data.find(item => item.category === category)
            ).filter(Boolean);
            setCategory(filteredProducts);
        })
    }, []);
    return(
        <>
            {category && category.length > 0 ? (
                category.map((item) => (
                    <div className="category-card" key={item.id}>
                        <img src={item.image} alt="" />
                        <h3>{item.category}</h3>
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
import productPic1 from "../assets/product-1.avif";
import productPic3 from '../assets/product-3.avif';
import productPic4 from '../assets/product-4.avif';
import productPic6 from '../assets/product-6.avif';
import productPic8 from '../assets/product-8.avif';
import productPic11 from '../assets/product-11.avif';

export default function ProductCategory() {
     const ProductCategory = [
        {
            id: 1,
            image: productPic1,
            category: "Electronics",
        },
        {
            id: 2,
            image: productPic3,
            category: "Photography",
        },
        {
            id: 3,
            image: productPic4,
            category: "Apparel",
        },
        {
            id: 4,
            image: productPic6,
            category: "Bags",
        },
        {
            id: 5,
            image: productPic8,
            category: "Groceries",
        },
        {
            id: 6,
            image: productPic11,
            category: "Watches",
        },
    ];
    return(
        <>
            {ProductCategory && ProductCategory.length > 0 ? (
                ProductCategory.map((product) => (
                    <div className="category-card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h3>{product.category}</h3>
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
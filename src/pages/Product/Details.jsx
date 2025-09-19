import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [testimonial, setTestimonial] = useState(null);

    useEffect(() => {
        
        fetch('https://testimonialapi.vercel.app/api')
            .then(res => res.json())
            .then(data => { 
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 3);
                setTestimonial(selected);
            });
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);

                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(allProducts => {
                        const sameCategory = allProducts.filter(
                            item => item.category === data.category && item.id !== data.id
                        );
                        setRelatedProducts(sameCategory);
                    });
            });
    }, [id]);
    
    return(
        <>
            <section className="breadcrumb">
                <div className="breadcrumb-container">
                    <Link to="/">Home</Link> &gt;
                    <Link to="/products">Products</Link> &gt;
                    <span>{product?.title}</span>
                </div>
            </section>

            <section className="product-detail">
                <div className="product-images">
                    <img id="main-img" src={product?.image} alt="Stylish Jacket" />
                    <div className="thumbnail-images">
                        <img src={product?.image} alt="" />
                        <img src={product?.image} alt="" />
                        <img src={product?.image} alt="" />
                    </div>
                </div>
                <div className="product-info">
                    <h1>{product?.title}</h1>
                    <p>{product?.description}</p>
                    <div className="price">{product?.price}</div>
                    <label>Quantity: <input type="number" value="1" min="1"  /></label>
                    <br /><br />
                    <button>Add to Cart</button>
                </div>
            </section>

            <section className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-cards">
                    {testimonial && testimonial.length > 0 ? (
                        testimonial.map((item) => (
                            <div className="review-card" key={item.id}>
                                <div className="review-header">
                                    <img src={item.avatar} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <div className="stars">{item.rating}</div>
                                </div>
                                <p>{item.message}</p>
                            </div>
                        ))
                    ) : (
                        <div className="no-data-card">
                            <p>No Testimonial available. Please check back later!</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="related">
                <h2>Related Products</h2>
                <div className="related-products">
                    {relatedProducts && relatedProducts.length > 0 ? (
                        relatedProducts.map((item) => (
                            <div className="product-card" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <span>${item.price}</span>
                            </div>
                        ))
                    ) : (
                        <div className="no-data-card">
                            <p>No Related Products available. Please check back later!</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
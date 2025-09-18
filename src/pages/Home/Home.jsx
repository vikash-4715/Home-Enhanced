import { Link } from "react-router-dom";
import ProductCategory from "../../components/ProductCategory";
import ProductsCards from "../../components/ProductCards";
import TrendingProducts from "../../components/TrendingProducts";

export default function Home() {
    const TestimonialData = [
        {
            id: 1,
            message: "Great quality products and fast delivery!",
            name: "John Doe",
        },
        {
            id: 2,
            message: "I love the style and variety available here.",
            name: "Jane Smith",
        },
        {
            id: 3,
            message: "Excellent customer service and easy returns.",
            name: "Mark Wilson",
        },
    ];
    return (
    <>
        <section className="hero">
            <h1>Discover Your Style</h1>
            <button>Shop Now</button>
        </section>

        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
                <ProductCategory />
            </div>
        </section>

        <section className="products">
            <ProductsCards />
        </section>

        <section className="trending">
            <h2>Trending Products</h2>
            <div className="trending-container">
                <TrendingProducts />
            </div>
        </section>

        <section className="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and offers</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </section>

        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-cards">
                {TestimonialData && TestimonialData.length > 0 ? (
                    TestimonialData.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <p>"{testimonial.message}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))
                ) : (
                    <div className="no-data-card">
                        <p>No testimonial available. Please check back later!</p>
                    </div>
                )}
            </div>
        </section>
    </>
  );
}

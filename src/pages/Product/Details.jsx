import { Link } from "react-router-dom";

export default function ProductDetails() {
    return(
        <>
            <section className="breadcrumb">
                <div className="breadcrumb-container">
                    <Link to="/">Home</Link> &gt;
                    <Link to="/product">Jackets</Link> &gt;
                    <span>Stylish Jacket</span>
                </div>
            </section>

            <section className="product-detail">
                <div className="product-images">
                <img id="main-img" src="https://images.unsplash.com/photo-1612831664821-9b2e3c7d022b?auto=format&fit=crop&w=800&q=80" alt="Stylish Jacket" />
                <div className="thumbnail-images">
                    <img src="https://images.unsplash.com/photo-1612831664821-9b2e3c7d022b?auto=format&fit=crop&w=800&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1600185362386-0cf3d6370e87?auto=format&fit=crop&w=800&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1593032465176-44a4b35db7e7?auto=format&fit=crop&w=800&q=80" alt="" />
                </div>
                </div>
                <div className="product-info">
                <h1>Stylish Jacket</h1>
                <p>A trendy, comfortable jacket made with premium materials. Perfect for casual wear and special outings.</p>
                <div className="price">$49.99</div>
                <label>Quantity: <input type="number" value="1" min="1"  /></label>
                <br /><br />
                <button>Add to Cart</button>
                </div>
            </section>

            <section className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-cards">
                <div className="review-card">
                    <div className="review-header">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" />
                    <h4>John Doe</h4>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p>Excellent jacket! Very comfortable and fits perfectly.</p>
                </div>

                <div className="review-card">
                    <div className="review-header">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" />
                    <h4>Jane Smith</h4>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p>Stylish and warm. Loved the color and design.</p>
                </div>

                <div className="review-card">
                    <div className="review-header">
                    <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Mark Wilson" />
                    <h4>Mark Wilson</h4>
                    <div className="stars">⭐⭐⭐⭐</div>
                    </div>
                    <p>Good quality for the price. Would recommend!</p>
                </div>
                </div>
            </section>

            <section className="related">
                <h2>Related Products</h2>
                <div className="related-products">
                <div className="product-card">
                    <img src="https://images.unsplash.com/photo-1593032465176-44a4b35db7e7?auto=format&fit=crop&w=800&q=80" alt="Casual Sneakers" />
                    <h3>Casual Sneakers</h3>
                    <span>$79.99</span>
                </div>
                <div className="product-card">
                    <img src="https://images.unsplash.com/photo-1611078488607-c24b5eb6cdb8?auto=format&fit=crop&w=800&q=80" alt="Elegant Watch" />
                    <h3>Elegant Watch</h3>
                    <span>$129.99</span>
                </div>
                <div className="product-card">
                    <img src="https://images.unsplash.com/photo-1600185362386-0cf3d6370e87?auto=format&fit=crop&w=800&q=80" alt="Leather Bag" />
                    <h3>Leather Bag</h3>
                    <span>$99.99</span>
                </div>
                <div className="product-card">
                    <img src="https://images.unsplash.com/photo-1612831664821-9b2e3c7d022b?auto=format&fit=crop&w=800&q=80" alt="Stylish Jacket" />
                    <h3>Stylish Jacket</h3>
                    <span>$49.99</span>
                </div>
                </div>
            </section>
        </>
    )
}
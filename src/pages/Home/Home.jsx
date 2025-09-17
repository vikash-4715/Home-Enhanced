import { Link } from "react-router-dom";

import productPic1 from "../../assets/product-1.avif";
import productPic2 from '../../assets/product-2.avif';
import productPic3 from '../../assets/product-3.avif';
import productPic4 from '../../assets/product-4.avif';
import productPic5 from '../../assets/product-5.avif';
import productPic6 from '../../assets/product-6.avif';
import productPic7 from '../../assets/product-7.avif';
import productPic8 from '../../assets/product-8.avif';
import productPic9 from '../../assets/product-9.avif';
import productPic10 from '../../assets/product-10.avif';
import productPic11 from '../../assets/product-11.avif';
import productPic12 from '../../assets/product-12.avif';
export default function Home() {
    const ProductData = [
        {
            id: 1,
            image: productPic1,
            name: "Wireless Headphones",
            description: "High-fidelity audio with noise cancellation.",
            price: "199.99",
            category: "Electronics",
            isTrending: true,
            isOnSale: false
        },
        {
            id: 2,
            image: productPic2,
            name: "Smart Watch",
            description: "Fitness tracking and smart notifications on a sleek design.",
            price: "150.00",
            category: "Electronics",
            isTrending: false,
            isOnSale: true,
            salePrice: "120.00",
            originalPrice: "150.00"
        },
        {
            id: 3,
            image: productPic3,
            name: "Instant Camera",
            description: "Capture and print memories instantly.",
            price: "99.99",
            category: "Photography",
            isTrending: false,
            isOnSale: false
        },
        {
            id: 4,
            image: productPic4,
            name: "Red Running Shoes",
            description: "Lightweight and responsive for performance.",
            price: "120.00",
            category: "Apparel",
            isTrending: true,
            isOnSale: false
        },
        {
            id: 5,
            image: productPic5,
            name: "Black Racing Bicycle",
            description: "Aerodynamic frame for professional cycling.",
            price: "1,500.00",
            category: "Sports",
            isTrending: true,
            isOnSale: false
        },
        {
            id: 6,
            image: productPic6,
            name: "Vintage Backpack",
            description: "Durable and stylish, perfect for travel.",
            price: "85.00",
            category: "Bags",
            isTrending: false,
            isOnSale: true,
            salePrice: "70.00",
            originalPrice: "85.00"
        },
        {
            id: 7,
            image: productPic7,
            name: "Berry Flavored Soda",
            description: "Natural berry soda in a classic glass bottle.",
            price: "2.50",
            category: "Beverages",
            isTrending: false,
            isOnSale: false
        },
        {
            id: 8,
            image: productPic8,
            name: "Ceramic Coffee Mugs (Set of 2)",
            description: "Classic white mugs for your favorite hot beverage.",
            price: "15.00",
            category: "Home Goods",
            isTrending: false,
            isOnSale: false
        },
        {
            id: 9,
            image: productPic9,
            name: "House Blend Coffee Beans",
            description: "A smooth and rich coffee blend, roasted to perfection.",
            price: "18.00",
            category: "Groceries",
            isTrending: true,
            isOnSale: false
        },
        {
            id: 10,
            image: productPic10,
            name: "Classic White Sneakers",
            description: "Iconic style with a comfortable fit.",
            price: "85.00",
            category: "Apparel",
            isTrending: false,
            isOnSale: false
        },
        {
            id: 11,
            image: productPic11,
            name: "Men's Chronograph Watch",
            description: "A stylish and functional timepiece with a leather strap.",
            price: "250.00",
            category: "Watches",
            isTrending: true,
            isOnSale: false
        },
        {
            id: 12,
            image: productPic12,
            name: "Lemon & Daisy Skincare Set",
            description: "A refreshing skincare line infused with natural citrus.",
            price: "45.00",
            category: "Beauty",
            isTrending: false,
            isOnSale: true,
            salePrice: "35.00",
            originalPrice: "45.00"
        }
    ];
    return (
    <>
        <section class="hero">
            <h1>Discover Your Style</h1>
            <button>Shop Now</button>
        </section>

        <section class="categories">
            <h2>Shop by Category</h2>
            <div class="category-grid">
                {ProductData && ProductData.length > 0 ? (
                    ProductData.map((product) => (
                        <div class="category-card" key={product.id}>
                            <img src={product.image} alt="" />
                            <h3>{product.category}</h3>
                        </div>
                    ))
                ) : (
                    <div className="no-data-card">
                        <p>No data available. Please check back later!</p>
                    </div>
                )}
                <div class="category-card">
                    <img src={productPic1} alt="" />
                    <h3>Bags</h3>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" alt="" />
                    <h3>Shoes</h3>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" alt="" />
                    <h3>Watches</h3>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80" alt="" />
                    <h3>Jackets</h3>
                </div>
            </div>
        </section>

        <section class="products">
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80" alt="" />
                <div class="product-info">
                    <h3>Stylish Jacket</h3>
                    <p>Comfortable & Trendy</p>
                    <span>$49.99</span>
                </div>
                <button class="add-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="" />
                <div class="product-info">
                    <h3>Casual Sneakers</h3>
                    <p>Lightweight & Durable</p>
                    <span>$79.99</span>
                </div>
                <button class="add-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80" alt="" />
                <div class="product-info">
                    <h3>Elegant Watch</h3>
                    <p>Luxury & Style</p>
                    <span>$129.99</span>
                </div>
                <button class="add-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="" />
                <div class="product-info">
                    <h3>Leather Bag</h3>
                    <p>Premium Quality</p>
                    <span>$99.99</span>
                </div>
                <button class="add-cart">Add to Cart</button>
            </div>
        </section>

        <section class="trending">
            <h2>Trending Products</h2>
            <div class="trending-container">
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80" />
                    <div class="product-info">
                        <h3>Leather Bag</h3>
                        <span>$99.99</span>
                    </div>
                    <button class="add-cart">Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" />
                    <div class="product-info">
                        <h3>Elegant Watch</h3>
                        <span>$129.99</span>
                    </div>
                    <button class="add-cart">Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" />
                    <div class="product-info">
                        <h3>Casual Sneakers</h3>
                        <span>$79.99</span>
                    </div>
                    <button class="add-cart">Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" />
                    <div class="product-info">
                        <h3>Stylish Jacket</h3>
                        <span>$49.99</span>
                    </div>
                    <button class="add-cart">Add to Cart</button>
                </div>
            </div>
        </section>

        <section class="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest updates and offers</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </section>

        <section class="testimonials">
            <h2>What Our Customers Say</h2>
            <div class="testimonial-cards">
                <div class="testimonial-card">
                    <p>"Great quality products and fast delivery!"</p>
                    <h4>- John Doe</h4>
                </div>
                <div class="testimonial-card">
                    <p>"I love the style and variety available here."</p>
                    <h4>- Jane Smith</h4>
                </div>
                <div class="testimonial-card">
                    <p>"Excellent customer service and easy returns."</p>
                    <h4>- Mark Wilson</h4>
                </div>
            </div>
        </section>
    </>
  );
}

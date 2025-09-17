import { Link } from "react-router-dom";

export default function Product() {
    return(
        <>
            <section className="breadcrumb">
                <div className="breadcrumb-container">
                    <Link to="/">Home</Link> &gt;
                    <span>Products</span>
                </div>
            </section>

            <div class="product-list-container">
                <h1>Shop All Products</h1>
                <div class="product-grid">
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1612831664821-9b2e3c7d022b?auto=format&fit=crop&w=800&q=80" alt="Stylish Jacket" />
                        <div class="product-info">
                            <h3>Stylish Jacket</h3>
                            <p>Comfortable & Trendy</p>
                            <span>$49.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1593032465176-44a4b35db7e7?auto=format&fit=crop&w=800&q=80" alt="Casual Sneakers" />
                        <div class="product-info">
                            <h3>Casual Sneakers</h3>
                            <p>Lightweight & Durable</p>
                            <span>$79.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1611078488607-c24b5eb6cdb8?auto=format&fit=crop&w=800&q=80" alt="Elegant Watch" />
                        <div class="product-info">
                            <h3>Elegant Watch</h3>
                            <p>Luxury & Style</p>
                            <span>$129.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1600185362386-0cf3d6370e87?auto=format&fit=crop&w=800&q=80" alt="Leather Bag" />
                        <div class="product-info">
                            <h3>Leather Bag</h3>
                            <p>Premium Quality</p>
                            <span>$99.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1588636270599-4467d169d300?auto=format&fit=crop&w=800&q=80" alt="Travel Backpack" />
                        <div class="product-info">
                            <h3>Travel Backpack</h3>
                            <p>For your next adventure</p>
                            <span>$65.00</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1549298916-f52d727d9535?auto=format&fit=crop&w=800&q=80" alt="Running Shoes" />
                        <div class="product-info">
                            <h3>Running Shoes</h3>
                            <p>Lightweight and responsive</p>
                            <span>$89.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1607590812735-865369c6f21c?auto=format&fit=crop&w=800&q=80" alt="Classic Sunglasses" />
                        <div class="product-info">
                            <h3>Classic Sunglasses</h3>
                            <p>UV protection, timeless style</p>
                            <span>$35.00</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be9a?auto=format&fit=crop&w=800&q=80" alt="Graphic T-Shirt" />
                        <div class="product-info">
                            <h3>Graphic T-Shirt</h3>
                            <p>100% Cotton, limited edition</p>
                            <span>$25.00</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1560969185-337582233f07?auto=format&fit=crop&w=800&q=80" alt="Leather Belt" />
                        <div class="product-info">
                            <h3>Leather Belt</h3>
                            <p>Durable and stylish</p>
                            <span>$39.99</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                    <div class="product-card">
                        <img src="https://images.unsplash.com/photo-1549412193-4e4b48690f05?auto=format&fit=crop&w=800&q=80" alt="Hooded Sweatshirt" />
                        <div class="product-info">
                            <h3>Hooded Sweatshirt</h3>
                            <p>Warm and comfortable</p>
                            <span>$55.00</span>
                        </div>
                        <button class="add-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
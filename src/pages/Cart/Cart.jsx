export default function Cart() {
    return(
        <>
        <section class="breadcrumb">
            <div class="breadcrumb-container">
            <a href="#">Home</a> &gt;
            <span>Shopping Cart</span>
            </div>
        </section>

        <div class="cart-container">
            <h2>Your Shopping Cart</h2>
            <table>
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <img src="https://images.unsplash.com/photo-1612831664821-9b2e3c7d022b?auto=format&fit=crop&w=800&q=80" alt="Stylish Jacket" />
                    <span>Stylish Jacket</span>
                </td>
                <td>$49.99</td>
                <td><input type="number" value="1" min="1" class="qty" /></td>
                <td class="total">$49.99</td>
                <td><button class="remove-btn">Remove</button></td>
                </tr>
                <tr>
                <td>
                    <img src="https://images.unsplash.com/photo-1593032465176-44a4b35db7e7?auto=format&fit=crop&w=800&q=80" alt="Casual Sneakers" />
                    <span>Casual Sneakers</span>
                </td>
                <td>$79.99</td>
                <td><input type="number" value="2" min="1" class="qty" /></td>
                <td class="total">$159.98</td>
                <td><button class="remove-btn">Remove</button></td>
                </tr>
            </tbody>
            </table>
            <div class="cart-summary">
            <p>Subtotal: $209.97</p>
            <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
        </>
    )
}
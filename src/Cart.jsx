import CartItem from "./components/cart/CartItem";
import './styles/cart.css';

function Cart({ cart, setCount }) {

    return (
        <>
            <div className="cart-header bottom-border">
                <h3>Your shopping cart (1)</h3>
            </div>

            <div className="cart-container bottom-border">
                <div className="cart-items">
                    {Object.entries(cart).map(([itemId, itemCount]) => (
                        <CartItem key={itemId} id={itemId} count={itemCount} setCount={setCount} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cart;
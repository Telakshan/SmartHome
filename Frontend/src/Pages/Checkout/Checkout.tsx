import { useContext } from "react";
import { CartContext } from "../../Hooks/CartContext";
import Button from "../../Components/Button/Button";
import "./Checkout.scss";
import CheckoutCartItem from "../../Components/CheckoutCartItem/CheckoutCartItem";
import { History } from "history";

interface CheckoutProps {
  history: History;
}

const Checkout: React.FC<CheckoutProps> = ({ history }) => {
  const { cartItems, total, clearCart } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Review Your Order</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        cartItems.map((product) => (
          <CheckoutCartItem key={product.id} product={product} />
        ))
      )}
      <div className="total">
        <h3>Total: ${total} </h3>
      </div>

      {cartItems.length > 0 ? (
        <>
          <p className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
          </p>
          <Button inverted={true} onClick={() => history.push('/payment')}>Proceed to payment</Button>
        </>
      ) : (
        <Button inverted={false} onClick={() => history.push("/shop")}>
          Go to shop
        </Button>
      )}
    </div>
  );
};

export default Checkout;

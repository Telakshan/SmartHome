import React, { useContext } from "react";
import AddressAndPayment from "../../Components/Address/AddressAndPayment";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext } from "../../Hooks/CartContext";

import './PaymentPage.scss';

const PaymentPage: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="payment-page-container">
      <div className="cart-items">
        {cartItems.map(({id, title, imageUrl, price, quantity}) => (
          <CartItem
            key={id}
            name={title}
            imageUrl={imageUrl}
            price={price}
            quantity={quantity}
          />
        ))}
      </div>

      <AddressAndPayment />
    </div>
  );
};

export default PaymentPage;

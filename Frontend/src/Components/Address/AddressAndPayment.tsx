import React, { useState, useContext, ChangeEvent } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import './AddressAndPayment.scss';
import { CartContext } from "../../Hooks/CartContext";

const AddressAndPayment: React.FC = () => {

  //777 Northern Blvd, Great Neck, NY 11020
  const [formData, setFormData] = useState({
    street: "777 Northern Blvd",
    city: "Great Neck",
    state: "New York",
    zipcode: "11020",
    cardNumber: "5555 4555 3555 2555",
    securityCode: "565",
  });

  const {total} = useContext(CartContext);

  const { street, city, state, zipcode, cardNumber, securityCode } = formData;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="address">
      <h2 className="title">Shipping Address and Payment</h2>

      <span>Enter your address here: </span>

      <form>
        <Input
          name="street"
          value={street}
          label="street"
          onChange={handleChange}
        />
        <Input name="city" value={city} label="city" onChange={handleChange} />
        <Input
          name="state"
          value={state}
          label="state"
          onChange={handleChange}
        />
        <Input
          name="zipcode"
          value={zipcode}
          label="zip-code"
          onChange={handleChange}
        />
        <Input
          name="cardNumber"
          value={cardNumber}
          label="card number"
          onChange={handleChange}
        />
        <Input
          name="securityCode"
          value={securityCode}
          label="cvc code"
          onChange={handleChange}
        />

        <h2 className='total-amount'>Total payment to be processed: {total}</h2>


        <Button inverted={false} onClick={() => {}}>
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default AddressAndPayment;

import './CartItem.scss';

interface CartItemProps{
  imageUrl: string;
  price: number;
  name: string;
  quantity: number;
}

const CartItem:React.FC<CartItemProps> = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className="cart-item">
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>

      <div className="item-details">
        <span className="name"> {name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

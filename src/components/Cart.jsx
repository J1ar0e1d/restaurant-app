import { useContext } from "react";
import Modal from "./Modal.jsx";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";
import { currencyFormatter } from "../numberFormat";
import CartItem from "./CartItem";


const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart () {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout ()  {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" 
    open={userProgressCtx.progress === 'cart'}
    onclose={userProgressCtx.progress === 'cart' ? handleCloseCart : null} 
    >
      <h2>Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cartCtx.items.length > 0 && (
            <Button onClick={handleGoToCheckout}>Proceed to chekout</Button>
            )}
      </p>
    </Modal>
  );
};

export default Cart;

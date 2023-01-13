import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(cartReducer, initialState);

  // adding items to cart
  const addItemToCart = (item) => {};

  // removing items from cart
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

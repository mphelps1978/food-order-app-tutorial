import { useReducer } from "react";
import CartContext from "./cart-context";
import { CartReducer, initialState } from "../components/Cart/cartReducer";

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM_TO_CART", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({type: 'REMOVE_ITEM_FROM_CART', payload: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

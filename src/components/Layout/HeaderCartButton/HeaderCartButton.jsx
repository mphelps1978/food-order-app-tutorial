import { useContext, useState, useEffect } from "react";
import CartIcon from "../../../assets/CartIcon";
import CartContext from "../../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [shakeButton, setShakeButton] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const buttonClasses = `${classes.button} ${shakeButton ? classes.bump : ""}`;
  const totalCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setShakeButton(true);
    const timer = setTimeout(() => {
      setShakeButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

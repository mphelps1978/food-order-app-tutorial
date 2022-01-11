import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const itemContext = useContext(CartContext)
  const formattedPrice = `$${props.price.toFixed(2)}`;
  
  const addToCartHandler = amount => {
    itemContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
    </li>
  );
};

export default MealItem;

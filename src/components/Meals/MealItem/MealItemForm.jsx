import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const addItemHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amountToNumber = +enteredAmount;
    if (
      amountToNumber.length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <>
      <form className={classes.form} onSubmit={addItemHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: 1,
            max: 5,
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add to Cart</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      </form>
    </>
  );
};

export default MealItemForm;

export const initialState = {
  items: [],
  totalAmount: 0,
};

export const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    const newTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const existingItem = state.items[existingItemIndex];
    const updatedTotal = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  return initialState;
};

export const initialState = {
  items: [],
  totalAmount: 0
}

export const CartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM_TO_CART') {
    const updatedItems = state.items.concat(action.payload)
    const newTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    }
  }
  if (action.type === 'REMOVE_ITEM_FROM_CART') {
    
  }
  return initialState
}


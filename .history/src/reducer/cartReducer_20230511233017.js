const initialCartState = []
const ADD_TO_CART = 'ADD_TO_CART'
// const DELETE_ITEM = 'DELETE_ITEM'
// const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM'
// const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
// const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
// const RESET = 'RE.payload
// const INITIALIZE = 'INITIALIZE'
// const CHECKOUT = 'CHECKOUT'
function cartReducer(state, action) {
  console.log(action.payload)
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, ...action.payload] }
  }
}

export { initialCartState, cartReducer }
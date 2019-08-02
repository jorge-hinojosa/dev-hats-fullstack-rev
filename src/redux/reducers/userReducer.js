import axios from 'axios';

const previousState = {
  loginFirst: false
}

// const ADD_TO_CART = "ADD_TO_CART";
const CHECK_FOR_USER = "CHECK_FOR_USER";

export function checkForUser() {
  return {
    type: ADD_TO_CART,
    payload: axios.post('/api/cart', {product})
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}


// export function cartReducer(state = previousState, action) {
//   const {type, payload} = action;

//   switch(type) {
//     case `${ADD_TO_CART}_FULFILLED`:
//       return {...state, cart: payload}
//     case `${FETCH_CART}_FULFILLED`:
//       return {...state, cart: payload}
//     default:
//       return state;
//   }
// }
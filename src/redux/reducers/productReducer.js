import axios from 'axios';

const previousState = {
  loading: false,
  products: []
}

//Action Types 
const FETCH_PRODUCTS = "FETCH_PRODUCTS";

//Action Creators
export function fetchAllProducts() {
  return {
    type: FETCH_PRODUCTS,
    payload: axios.get('/api/products')
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err))
  }
}

//Reducer Function
export function productReducer(state = previousState, action) {
  const {type, payload} = action;

  switch(type) { 
    case `${FETCH_PRODUCTS}_PENDING`:
      return {...state, loading: true}
    case `${FETCH_PRODUCTS}_FULFILLED`:
      return {...state, loading: false, products: payload}
    default:
      return state;
  }
}
import {
  GET_PRODUCTS
} from './actionTypes'


export const getProducts = (products = []) => {
  return dispacth => {
    dispacth({
      type: GET_PRODUCTS,
      payload: products
    })
  }
}
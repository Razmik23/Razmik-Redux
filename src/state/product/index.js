import {productActions} from "./actions";

const initialState = {
    product:[]
   
  }
  export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case productActions.ADD_PRODUCT_INFO: {
            let newProduct = [...state.product, action.payload]
                newProduct = newProduct.map((item, index) => {
                  return {
                    ...item,
                    id: index + 1
                  }
                })
          return {...state, product: newProduct}
              
        //   return {...state, product:{...state.product, ...action.payload}}
        }
        case productActions.DELETE_PRODUCT: {
            const newProduct = state.product.filter(x => x.id !== action.payload)
            return {...state, product: newProduct}
          }
        default: {
            return state
          }
        }
      }
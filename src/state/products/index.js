const initialState = {
  token: ''
}


const ProductsReducer = (state = initialState, action) => {
  console.log(action, 'ProductsReducer')

  switch (action.type) {
    case 'SET_PRODUCTS': {

    }
    default:
      return state
  }
}


export default ProductsReducer
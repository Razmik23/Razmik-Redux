import { createStore } from 'redux'
import GlobalSlice from "../state/global-slice/global-slice";
import rootReducer from "./reducers";
// import GlobalReducer from "../state/global-data";
// import rootReducer from './reducers'
//
// const store = createStore(rootReducer)
//
// export default store


const store = createStore(rootReducer)
export default store







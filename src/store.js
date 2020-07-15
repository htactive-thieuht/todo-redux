
import {createStore} from "redux";
import  rootReducer from './reducers/indexReducers'
const store = createStore( rootReducer)
export default store;
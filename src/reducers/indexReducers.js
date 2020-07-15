import todoReducer from "./todoListReducer";
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;
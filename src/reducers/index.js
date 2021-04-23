import { combineReducers } from "redux";
import todosReducer from "./todos";
import itemsReducer from "./items";

const rootReducers = combineReducers({
  todos: todosReducer,
  items: itemsReducer,
});

export default rootReducers;

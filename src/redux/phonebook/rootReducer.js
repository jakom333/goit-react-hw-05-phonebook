import { combineReducers } from "redux";
import { contacts, filter } from "./contacts.reducers";

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;

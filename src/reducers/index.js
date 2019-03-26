import { combineReducers } from "redux";
import users from "./users";
import editting from "./editing";
const appReducer = combineReducers({
  users,
  editting
});

export default appReducer;

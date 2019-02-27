import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";

export default combineReducers({
  // Returns array
  libraries: LibraryReducer
});

// console.log(store.getState())

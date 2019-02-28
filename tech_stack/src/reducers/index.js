import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
  // Returns array
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// console.log(store.getState())

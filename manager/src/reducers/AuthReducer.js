// First thing to look at when getting undefined error
import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/types";
// import console = require("console");

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      //   console.log("action!");

      return {
        // Make a new object that takes all of the properties of existing state object and throw them into that object
        // Then define property email given the value of action.payload and toss it to ...state (Example if someone gives value "asd" to email input)
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};

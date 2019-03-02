// First thing to look at when getting undefined error
import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //   console.log("action!");
      return {
        // Make a new object that takes all of the properties of existing state object and throw them into that object
        // Then define property email given the value of action.payload and toss it to ...state (Example if someone gives value "asd" to email input)
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};

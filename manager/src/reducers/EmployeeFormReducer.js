import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: "" // Monday
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: "name", value: "riitta"}
      return {
        ...state,
        //  [action.payload.prop]=name,shift,phone
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE; // Resets the form
    default:
      return state;
  }
};

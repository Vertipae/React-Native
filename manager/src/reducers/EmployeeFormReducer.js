import { EMPLOYEE_UPDATE } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
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
    default:
      return state;
  }
};

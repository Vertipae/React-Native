import { EMPLOYEE_UPDATE } from "./types";
// Prop = name, phone value=123-123-123 or riitta
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

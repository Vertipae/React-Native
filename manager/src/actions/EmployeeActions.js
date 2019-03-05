import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from "./types";
import { Actions } from "react-native-router-flux";

// Prop = name, phone value=123-123-123 or riitta
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // console.log(name, phone, shift);
  // .ref(path to json data) // userId currently authenticated user

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        // Dispatch an action and clears/resets the form
        dispatch({ type: EMPLOYEE_CREATE });
        // Actions.pop returns to previous scene Actions.pop({ type: "reset"}) if backbutton appears
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  // Currently user that is logged into application
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      // Fetching the data
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

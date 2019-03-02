import firebase from "@firebase/app";
import "@firebase/auth";

import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";
// import console = require("console");

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// Manually dispatching
// Asynchronous action that needs thunk dispatch -> wait after the request is complete -> then -> dispatch
export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: user
        });
      });
  };
};

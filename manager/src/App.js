import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "@firebase/app";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";
import { olimpaoikeassa } from "react-native-dotenv";

class App extends Component {
  componentWillMount() {
    // console.log(process.env);
    // console.log(olimpaoikeassa);
    const config = {
      apiKey: olimpaoikeassa,
      authDomain: "manager-7e6f2.firebaseapp.com",
      databaseURL: "https://manager-7e6f2.firebaseio.com",
      projectId: "manager-7e6f2",
      storageBucket: "manager-7e6f2.appspot.com",
      messagingSenderId: "1019094691913"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

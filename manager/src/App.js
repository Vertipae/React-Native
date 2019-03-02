import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "@firebase/app";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC8zO6V8y8k1ZZQp_QTqQkIjbDPTjdhuZA",
      authDomain: "manager-7e6f2.firebaseapp.com",
      databaseURL: "https://manager-7e6f2.firebaseio.com",
      projectId: "manager-7e6f2",
      storageBucket: "manager-7e6f2.appspot.com",
      messagingSenderId: "1019094691913"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

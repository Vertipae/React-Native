import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "../index";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBx47n6Jvm9RR_hw4zFhyWiYSS9L8pCmxU",
      authDomain: "auth-9d529.firebaseapp.com",
      databaseURL: "https://auth-9d529.firebaseio.com",
      projectId: "auth-9d529",
      storageBucket: "auth-9d529.appspot.com",
      messagingSenderId: "122340598204"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

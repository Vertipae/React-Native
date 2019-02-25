import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "../index";
import LoginForm from "./components/LoginForm";
import { CardSection } from "./components/common/CardSection";

class App extends Component {
  // Three states (logged in, not logged in and not sure if logged in (null))
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBx47n6Jvm9RR_hw4zFhyWiYSS9L8pCmxU",
      authDomain: "auth-9d529.firebaseapp.com",
      databaseURL: "https://auth-9d529.firebaseio.com",
      projectId: "auth-9d529",
      storageBucket: "auth-9d529.appspot.com",
      messagingSenderId: "122340598204"
    });
    // Event handler for signing in or out
    firebase.auth().onAuthStateChanged(user => {
      // If user is logged in  then log in is true
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // If user is logged in then showing Log out button if not then showing Login form
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      // For not sure (null)
      default:
        return (
          <View style={{ marginTop: 50 }}>
            <Spinner size="large" />
          </View>
        );
    }
    // if (this.state.loggedIn) {
    //   return (
    //     <CardSection>
    //       <Button>Log Out</Button>
    //     </CardSection>
    //   );
    // }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {/* <LoginForm /> */}
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

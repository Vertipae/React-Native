import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "../../index.js";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  // Authenticate user
  onButtonPress() {
    const { email, password } = this.state;

    // Clearing the error message when user attempts to log in again
    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // If log in fails then creating a new account with that email & password (this is crazy)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          // If that fails too then then showing error
          .catch(() => {
            this.setState({ error: "Authentication Failed." });
          });
      });
  }

  renderButton() {
    // If loading is true then return spinner
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    // Else (return) show button
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            // Props value & onChangeText
            value={this.state.email}
            // {email => } argument can be named on the fly
            onChangeText={email => this.setState({ email })} // email:email
            // style={{ height: 40, width: 100 }}
          />
        </CardSection>
        {/* Password input */}
        <CardSection>
          <Input
            // Listing this gives automatically value true
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        {/* Error message */}
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;

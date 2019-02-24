import React, { Component } from "react";
import firebase from "firebase";
import { Button, Card, CardSection, Input } from "../../index.js";

class LoginForm extends Component {
  state = { email: "", password: "" };

  // Authenticate user
  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Card, CardSection } from "../../index.js";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

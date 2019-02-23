import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "../../index.js";

class LoginForm extends Component {
  state = { text: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            // Props value & onChangeText
            value={this.state.text}
            onChangeText={text => this.setState({ text })} // text: text
            // style={{ height: 40, width: 100 }}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

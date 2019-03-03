import React, { Component } from "react";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";
import { Input } from "./common/Input";
import { Button } from "./common/Button";
import { Text, View } from "react-native";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Name" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="Phone" />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;

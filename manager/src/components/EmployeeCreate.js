import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions/EmployeeActions";
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
          <Input
            label="Name"
            placeholder="Name"
            value={this.props.employeeForm.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            } // From employeeActions.js
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="Phone"
            value={this.props.employeeForm.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  employeeForm: state.employeeForm
});

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);

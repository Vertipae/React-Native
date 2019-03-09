import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions/EmployeeActions";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";
import { Button } from "./common/Button";
import EmployeeForm from "./EmployeeForm";
// import { Text, View, Picker } from "react-native";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props.employeeForm;
    // Defaulting shift to monday
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
  render() {
    console.log(this.props.employees);
    return (
      <Card>
        {/* Takes all of the differend props that EmployeeCreate.js has and forwards them to EmployeeForm.js as well */}
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);

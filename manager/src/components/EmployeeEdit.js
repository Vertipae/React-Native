import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
// import { Text, View } from "react-native";
import { employeeUpdate, employeeSave } from "../actions/EmployeeActions";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";
import { Button } from "./common/Button";
// import console = require("console");

class EmployeeEdit extends Component {
  componentWillMount() {
    // Calling each key value, prop and updating the reducer with every property (pre-filled value)
    // this.props.employee from EmployeeList.js
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    // console.log(this.props.employeeForm);
    // console.log(this.props.employee);
    // Parameters for employeeSave in EmployeeActions.js
    this.props.employeeSave({
      name: this.props.employeeForm.name,
      phone: this.props.employeeForm.phone,
      shift: this.props.employeeForm.shift,
      uid: this.props.employee.uid
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
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
  { employeeUpdate, employeeSave }
)(EmployeeEdit);

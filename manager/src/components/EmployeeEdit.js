import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import EmployeeForm from "./EmployeeForm";
// import { Text, View } from "react-native";
import { employeeUpdate, employeeSave } from "../actions/EmployeeActions";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";
import { Button } from "./common/Button";
import { Confirm } from "./common/Confirm";

class EmployeeEdit extends Component {
  // By default modal ain't showing
  state = { showModal: false };
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
  // Sending text message to employee
  onTextPress() {
    const { phone, shift } = this.props.employeeForm;
    // console.log(this.props);
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>

        {/* Makes this visible after user taps delete button */}
        <Confirm visible={this.state.showModal}>
          Are you sure you want to delete this?
        </Confirm>
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

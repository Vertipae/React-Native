import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions/EmployeeActions";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";
import { Input } from "./common/Input";
import { Button } from "./common/Button";
import { Text, View, Picker } from "react-native";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props.employeeForm;
    // Defaulting shift to monday
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
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

        <CardSection style={{ padding: 13 }}>
          <Text style={styles.pickertextStyle}>Shift</Text>
          <View style={{ flex: 2, paddingLeft: 85 }}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.employeeForm.shift}
              onValueChange={value =>
                this.props.employeeUpdate({ prop: "shift", value })
              }
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickertextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => ({
  employeeForm: state.employeeForm
});

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);

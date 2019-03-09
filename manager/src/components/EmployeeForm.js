import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions/EmployeeActions";
import { Input } from "./common/Input";
import { CardSection } from "./common/CardSection";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  employeeForm: state.employeeForm
});

const styles = {
  pickertextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);

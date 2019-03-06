import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, Text, View } from "react-native";
import { employeesFetch } from "../actions/EmployeeActions";
import { CardSection } from "./common/CardSection";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItem(employee) {
    // console.log(employee.item.name);
    return (
      <CardSection>
        <Text style={styles.titleStyle}>Oh, hi {employee.item.name}</Text>
      </CardSection>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
const mapStateToProps = state => {
  console.log(state);
  // Object to array -> so it can be mapped
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};
export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);

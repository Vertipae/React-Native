import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, Text, View } from "react-native";
import { employeesFetch } from "../actions/EmployeeActions";
// import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  // TODO
  // renderItem(employee) {
  //   return <ListItem employee={employee} />;
  // }

  render() {
    return (
      <View />
      // <FlatList
      //   data={this.props.employees}
      //   renderItem={this.renderItem}
      //   keyExtractor={employees => employees.id.toString()}
      // />
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);

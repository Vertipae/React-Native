import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
// import { Text, View } from 'react-native'

const RouterComponent = () => {
  return (
    <Router>
      {/* Root/Parent Scene */}
      <Scene key="root" titleStyle={style.titleStyle}>
        {/* Initial = First component to show */}
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  );
};

const style = {
  titleStyle: {
    flex: 1,
    textAlign: "center",
    color: "#f0f"
  }
};

export default RouterComponent;

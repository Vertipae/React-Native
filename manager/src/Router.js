import React, { Component } from "react";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
// import { Text, View } from 'react-native'

const RouterComponent = () => {
  return (
    <Router>
      {/* Root/Parent Scene */}
      <Stack key="root" titleStyle={style.titleStyle} hideNavBar>
        {/* Initial = First component to show */}
        <Stack key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Stack>
        {/* Inside main is employee components so it is easy to navigate (back button) */}
        <Stack key="main">
          <Scene
            rightTitle="Add"
            // When user taps on the right side button
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Stack>
      </Stack>
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

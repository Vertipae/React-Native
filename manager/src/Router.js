import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
// import { Text, View } from 'react-native'

const RouterComponent = () => {
  return (
    <Router>
      {/* Root/Parent Scene */}
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          titleStyle={style.titleStyle}
        />
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

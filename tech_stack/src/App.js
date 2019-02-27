import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

class App extends Component {
  render() {
    return (
      // Provider communicates with react // Store holds states
      <Provider store={createStore(reducers)}>
        <View>
          <Text> textInComponent </Text>
        </View>
      </Provider>
    );
  }
}

export default App;

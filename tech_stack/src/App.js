import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Header } from "../index";
import LibraryList from "./components/LibraryList";

class App extends Component {
  render() {
    return (
      // Provider communicates with react // Store holds states
      <Provider store={createStore(reducers)}>
        {/* Flex fills up space */}
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;

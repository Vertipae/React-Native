/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
// import ReactNative from 'react-native'

class App extends React.Component {
  render() {
    return (
      // Flex: 1 so the scrollable content wouldn't bounce back up and so it would show the bottom picture
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}

export default App;

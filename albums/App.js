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
      <View>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}

export default App;

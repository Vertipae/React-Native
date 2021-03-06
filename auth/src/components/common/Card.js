// Styling component
import React, { Component } from "react";
import { Text, View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, heigth: 2 },
    shadowOpacity: 0.1,
    // Nice corners
    shadowRadius: 2,
    elevation: 3,
    // Space
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export { Card };

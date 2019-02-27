// Reusable component button
import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      // onPress function is provided by the parent component in AlbumDetail.js
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    // Specifying the boldness
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // For expanding the button (fill as much content as it possibly can)
    flex: 1,
    // Uses flexbox rules
    alignSelf: "stretch",
    backgroundColor: "#fff",
    // Rounded borders
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};
export { Button };

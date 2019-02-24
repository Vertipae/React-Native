// Reusable component

import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        // Password will be obstructed
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    // Space between each line of text
    lineHeight: 23,
    // Spacing
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    // Container style fills all the available space (View)
    flex: 1,
    // So that the label and input will lineup in a row direction
    flexDirection: "row",
    // Lined up vertically
    alignItems: "center"
  }
};

export { Input };

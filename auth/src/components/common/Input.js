// Reusable component

import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 40, width: 100 }}
      />
    </View>
  );
};

export { Input };

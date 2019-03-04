import React, { Component } from "react";
import { Text, View } from "react-native";

const CardSection = props => {
  // props.style will overwrite styles.containerStyle (so other components can create new styles)
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    // Flex left in horizontal direction (row)
    justifyContent: "flex-start",
    flexDirection: "row", // flexDirection: "column" is default
    //
    borderColor: "#ddd",
    position: "relative"
  }
};
export { CardSection };

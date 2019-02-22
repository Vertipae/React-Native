import React, { Component } from "react";
import { Text, View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
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
export default CardSection;
